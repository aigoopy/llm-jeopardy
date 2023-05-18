require('dotenv').config();
const cliProgress = require('cli-progress');
const yargs = require("yargs");
const db = require('better-sqlite3')('./dbljeopardy.sqlite');
const prompt = require("prompt-sync")({ sigint: true });
const { execSync } = require("child_process");
var vega = require('vega')
var sharp = require('sharp');
var stackedBarChartSpec = require('./stacked-bar-chart.spec.json');

const llamapath = process.env.DEVPATH + "/repos/llama.cpp/main";

const options = yargs
    .usage("Usage: <command> [args]")
    .option("a", { alias: "addprompt", describe: "add a prompt to db and process", type: "boolean", demandOption: false })
    .option("c", { alias: "createchart", describe: "create a chart from the data", type: "boolean", demandOption: false })
    .option("r", { alias: "run", describe: "run model inference", type: "boolean", demandOption: false })
    .option("g", { alias: "grade", describe: "grade model answers", type: "boolean", demandOption: false })
    .argv;

//Create chart
if (options.createchart) {
    //Get current data and populate chart spec
    var sql = '';
    sql += 'select ';
    sql += 'model.name as model_name, model.color as model_color, model.textcolor as model_textcolor, model.size as model_size, model.modeldate as model_date, model.startup as model_startup, ';
    sql += 'SUM(model_prompt.correct) as model_sum, ';
    sql += 'MAX(DATE(prompt.airdate)) as prompt_maxdate, ';
    sql += 'AVG(model_prompt.correct) as model_avg, ';
    sql += 'AVG(model_prompt.elapsed) as elapsed_avg, ';
    sql += 'AVG(model_prompt.correct) * 100 as model_pct, ';
    sql += 'COUNT(model_prompt.correct) as model_total ';
    sql += 'from model ';
    sql += 'inner join model_prompt on (model.model_id = model_prompt.model_id) ';
    sql += 'inner join prompt on (prompt.prompt_id = model_prompt.prompt_id) ';
    sql += 'where graphdisplay = 1 ';
    sql += 'group by model.name, model.color, model.textcolor, model.size, model.startup, model.modeldate ';
    sql += 'order by model_avg DESC, elapsed_avg - model_startup ';
    var pData = [];
    const rows = db.prepare(sql).all();
    const datesArray = rows.map(dt => new Date(dt.prompt_maxdate));
    var maxdate = new Date(Math.max(...datesArray)).toISOString().split('T')[0];

    rows.forEach(function (row) {
        pData.push({
            "model": row.model_name,
            "maxairdate": maxdate,
            "modelcorrect": row.model_sum,
            "percent": row.model_pct ? row.model_pct.toFixed(2) : 0,
            "elapsed": ((row.elapsed_avg - row.model_startup) / 1000).toFixed(3),
            "modeltotal": row.model_total,
            "msize": parseFloat(row.model_size).toLocaleString('en'),
            "mdate": row.model_date,
            "c": '#' + row.model_color,
            "tc": '#' + row.model_textcolor
        })
    });

    //Create a new view instance for a given Vega JSON spec
    var view = new vega
        .View(vega.parse(stackedBarChartSpec))
        .renderer('none')
        .initialize()
        .insert("pData", pData);

    //Generate static PNG file from chart
    view.toSVG()
        .then(async function (svg) {

            await sharp(Buffer.from(svg))
                .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png')
                .toFile('dbljeopardy.png')
        })
        .catch(function (err) {
            console.log("Error writing PNG to file:")
            console.error(err)
        });
}

//Add new prompt to the db
if (options.addprompt) {
    const airdate = prompt("Airdate (YYYY-MM-DD): ");
    const modelprompt = prompt("Model prompt: ");
    const answer = prompt("Answer: ");
    const category = prompt("Category Name: ");
    const level = prompt("Level (1-6): ");
    let stmt = db.prepare('INSERT INTO prompt (airdate, category, level, amt, query, answer) VALUES (?, ?, ?, ?, ?, ?)');
    stmt.run(airdate, category, level, 2000, modelprompt, answer);
}

//Run inference on promptrows and save result
if (options.run) {
    let promptrows = getPromptRows();
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(promptrows.length, 0);

    promptrows.forEach(function (prow) {
        bar1.increment();
        var query = prow.query;
        if (prow.template)
        {
            query = prow.template.replace("{{{prompt}}}", query);
        }
        var llamaargs = ' ' + prow.args;
        console.log();;
        var startTime = new Date();
        let exePath = llamapath + " -m " + process.env.DEVPATH + prow.filepath + llamaargs + " -p \"" + query + "\"";
        console.log(exePath);
        let answer = execSync(exePath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
        });
        var elapsed = new Date() - startTime;
        answer = answer.toString();
        if (prow.template)
        {
            var templatetokens = prow.template.split(' ');
            templatetokens.forEach(function(token) {               
                answer = answer.replace(token.trim(), '');
            })
        }
        answer = answer.replace(prow.query, '');
        answer = answer.trim();
        console.log('-----------------------------------------');
        console.log(prow.query);
        console.log('-----------------------------------------');
        console.log(answer);
        console.log('-----------------------------------------');
        let stmt = db.prepare("INSERT INTO model_prompt (model_id, prompt_id, answer, elapsed) VALUES (?, ?, ?, ?)");
        stmt.run(prow.modelid, prow.promptid, answer, elapsed);
    })

    console.clear();
    bar1.stop();
}

//Grade ungraded model answers
if (options.grade) {
    let ungradedrows = getUngradedRows();
    ungradedrows.forEach(function (prow) {
        console.clear();
        console.log(prow.query);
        console.log("Airdate: " + prow.airdate);
        console.log("Model answer:");
        console.log("-----------------------------");
        console.log(prow.model_answer);
        console.log("-----------------------------");
        console.log("Correct answer:");
        console.log(prow.correct_answer);
        let correct = parseInt(prompt("Correct (0 or 1): "));
        var sql = 'UPDATE model_prompt SET correct = ? WHERE model_prompt.model_id = ? and model_prompt.prompt_id = ?';
        let stmt = db.prepare(sql);
        stmt.run(correct, prow.modelid, prow.promptid);
    });
}

db.close();

//Get list of prompts that do not have prompt answers
function getPromptRows() {
    let retrows = [];
    const rows = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid from model cross join prompt where date(model.date) < date(prompt.airdate) and model.process = 1 except select model_id, prompt_id from model_prompt").all();
    rows.forEach(function (row) {
        const prow = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid, model.filepath, model.args, model.template, prompt.query, prompt.answer, prompt.airdate from model,prompt where model.model_id = " + row.modelid + " and prompt.prompt_id = " + row.promptid).get();
        retrows.push(prow);
    });
    return retrows;
};

//Get list of prompts that do not have prompt answers
function getUngradedRows() {
    let retrows = [];
    const rows = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid from model cross join prompt where date(model.date) < date(prompt.airdate) and model.process = 1 except select model_id, prompt_id from model_prompt where correct IS NOT NULL").all();
    rows.forEach(function (row) {
        var sql = '';
        sql += 'select model.model_id as modelid, prompt.prompt_id as promptid, model.filepath, model.args, ';
        sql += 'prompt.query, prompt.answer as correct_answer, prompt.airdate, model_prompt.answer as model_answer ',
            sql += 'from model ';
        sql += 'inner join model_prompt on (model.model_id = model_prompt.model_id) ';
        sql += 'inner join prompt on (prompt.prompt_id = model_prompt.prompt_id) ';
        sql += 'where model_prompt.model_id = ' + row.modelid + ' and model_prompt.prompt_id = ' + row.promptid;
        const prow = db.prepare(sql).get();
        retrows.push(prow);
    });
    return retrows;
};


require('dotenv').config();
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
    .argv;

//Create chart
if (options.createchart) {
    //Get current data and populate chart spec
    var sql = '';
    sql += 'select ';
    sql += 'model.name as model_name, model.color as model_color, model.textcolor as model_textcolor, model.size as model_size, model.startup as model_startup, ';
    sql += 'SUM(model_prompt.correct) as model_sum, ';
    sql += 'MAX(prompt.airdate) as prompt_maxdate, ';
    sql += 'AVG(model_prompt.correct) as model_avg, ';
    sql += 'AVG(model_prompt.elapsed) as elapsed_avg, ';
    sql += 'AVG(model_prompt.correct) * 100 as model_pct, ';
    sql += 'COUNT(model_prompt.correct) as model_total ';
    sql += 'from model ';
    sql += 'inner join model_prompt on (model.rowid = model_prompt.model_id) ';
    sql += 'inner join prompt on (prompt.rowid = model_prompt.prompt_id) ';
    sql += 'group by model.name, model.color, model.textcolor, model.size, model.startup ';
    sql += 'order by model_avg DESC, elapsed_avg - model_startup ';
    var pData = [];

    const rows = db.prepare(sql).all();
    rows.forEach(function (row) {
        pData.push({
            "model": row.model_name,
            "maxairdate": row.prompt_maxdate,
            "percent": row.model_pct.toFixed(2),
            "elapsed": ((row.elapsed_avg - row.model_startup) / 1000).toFixed(3),
            "modeltotal": row.model_total,
            "msize": parseFloat(row.model_size).toLocaleString('en'),
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
    const category = prompt("Category (1-6): ");
    let stmt = db.prepare('INSERT INTO prompt (airdate, category, amt, query, answer) VALUES (?, ?, ?, ?, ?)');
    stmt.run(airdate, category, 2000, modelprompt, answer);
}

//Run inference on promptrows and save result
if (options.run) {
    let promptrows = getPromptRows();
    promptrows.forEach(function (prow) {
        var llamaargs = ' ' + prow.args;
        if (prow.runalpaca == 1)
            llamaargs += " -ins ";
        console.log("Running: " + prow.filepath + llamaargs);
        var startTime = new Date();
        let exePath = llamapath + " -m " + process.env.DEVPATH + prow.filepath + llamaargs + " -p \"" + prow.query + "\"";
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
        console.clear();
        console.log("Ran: " + prow.filepath + llamaargs);
        console.log(prow.query);
        console.log("Airdate: " + prow.airdate);
        answer = answer.toString();
        answer = answer.replace(prow.query, '');
        answer = answer.replace('\n', '');
        answer = answer.replace('\"', '');
        console.log("Model answer:");
        console.log(answer);
        console.log("-----------------------------");
        console.log("Correct answer:");
        console.log(prow.answer);
        let correct = parseInt(prompt("Correct (0 or 1): "));
        let hallucinate = parseInt(prompt("Hallucinate (0 or 1): "));
        let stmt = db.prepare("INSERT INTO model_prompt (model_id, prompt_id, answer, correct, elapsed, hallucinate) VALUES (?, ?, ?, ?, ?, ?)");
        stmt.run(prow.modelid, prow.promptid, answer, correct, elapsed, hallucinate);
    })
}

db.close();

//Get list of prompts that do not have prompt answers
function getPromptRows() {
    let retrows = [];
    const rows = db.prepare("select model.ROWID as modelid, prompt.ROWID as promptid from model cross join prompt where date(model.date) < date(prompt.airdate) and model.process = 1 except select model_id, prompt_id from model_prompt").all();
    rows.forEach(function (row) {
        const prow = db.prepare("select model.rowid as modelid, prompt.rowid as promptid, model.filepath, model.runalpaca, model.args, prompt.query, prompt.answer, prompt.airdate from model,prompt where model.rowid = " + row.modelid + " and prompt.rowid = " + row.promptid).get();
        retrows.push(prow);
    });
    return retrows;
};
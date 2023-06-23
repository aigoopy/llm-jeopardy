import dotenv from 'dotenv';
import cliProgress from 'cli-progress';
import Database from 'better-sqlite3';
import prompt from 'prompt-sync';
import fs from 'fs';
import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import mdtable from 'json-to-markdown-table';
import vega from 'vega';
import sharp from 'sharp';
import path from 'path';
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));

dotenv.config();
const db = new Database('./dbljeopardy.sqlite');
prompt.sigint = true;

const llamapath = process.env.DEVPATH + "/repos/llama.cpp/main";

const argv = yargs
    .option("a", { alias: "addprompt", describe: "add a prompt to db and process", type: "boolean", demandOption: false })
    .option("c", { alias: "createchart", describe: "create a chart from the data", type: "boolean", demandOption: false })
    .option("d", { alias: "createdailychart", describe: "create a daily line chart from the data", type: "boolean", demandOption: false })
    .option("r", { alias: "run", describe: "run model inference", type: "boolean", demandOption: false })
    .option("e", { alias: "extramodels", describe: "list models not used", type: "boolean", demandOption: false })
    .option("t", { alias: "createtable", describe: "create markdown table", type: "boolean", demandOption: false })
    .option("g", { alias: "grade", describe: "grade model answers", type: "boolean", demandOption: false })
    .argv;


//Create chart
if (argv.createchart) {
    var pData = getBarChartData();

    let stackedBarChartSpec = JSON.parse(readFileSync("./stacked-bar-chart.spec.json", "utf8"));

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
                .toFile('dbljeopardy.png');

            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

            await sharp(Buffer.from(svg))
                .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png')
                .toFile('archive/dbljeopardy_' + yyyy.toString() + '_' + mm.toString() + '_' + dd.toString() + '.png');
        })
        .catch(function (err) {
            console.log("Error writing PNG to file:")
            console.error(err)
        });
}

//Create table
if (argv.createtable) {
    var pData = getBarChartData();
    var pCols = ['name', 'percent', 'modelcorrect', 'modeltotal', 'elapsed', 'answerlen', 'msize', 'mdate'];
    pData.forEach(function (row) {
        row.name = '<a href="' + row.msource + '" target="_blank">' + row.model + '</a>';
        row.mdate = (new Date(row.mdate)).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    });
    var tabledata = mdtable(pData, pCols);

    //Write to README
    var delim = '<!--- TABLESTART --->';
    var data = readFileSync('./README.md', 'utf8');
    data = data.substring(0, data.indexOf(delim) + delim.length);
    data += "\r\n";
    data += tabledata;
    writeFileSync('./README.md', data, 'utf8');
}

//List extra models not used
if (argv.extramodels) {
    var modelspath = process.env.DEVPATH + '/models/ggml/';
    var sql = '';
    sql += 'select model.filepath from model where process=1 or graphdisplay=1;';
    var modelfiles = db.prepare(sql).all().map(x => path.basename(x.filepath));
    const files = findFilesInDir(modelspath, '.bin');
    files.forEach(function(file) {
        if (!modelfiles.includes(path.basename(file))) {
            console.log(file);
        }
    });
}

//NOT IMPLEMENTED
if (argv.createdailychart) {
    console.log("Not Implemented");

    /*
    //Daily Line chart
    sql = '';
    sql += 'select ';
    sql += 'prompt.airdate as prompt_airdate, model.name as model_name, model.color as model_color, date(model.modeldate) as model_date, avg(correct) as model_pct, avg(elapsed)/1000 as seconds_elapsed from model ';
    sql += 'inner join model_prompt on (model_prompt.model_id = model.model_id) ';
    sql += 'inner join prompt on (model_prompt.prompt_id = prompt.prompt_id) ';
    sql += 'group by prompt.airdate, model.name, model.color, date(model.modeldate) ';
    sql += 'order by prompt.airdate, avg(correct) desc, avg(elapsed);';
    var pData = [];
    const lineRows = db.prepare(sql).all();
 
    lineRows.forEach(function (row) {
        var dp = new Date(row.prompt_airdate);
        var dm = new Date(row.model_date)

        pData.push({
            "modelname": row.model_name,
            "modeldate": row.model_date,
            "airdate": row.prompt_airdate,
            "avgcorrect": row.model_pct ? row.model_pct.toFixed(2) : 0,
            "elapsed": row.seconds_elapsed.toFixed(3),
            "c": '#' + (dp < dm ? 'FF0000' : row.model_color)
        })
    });
 
    var models = groupBy(pData, 'modelname');
    var keys = Object.keys(models);
    for (var i = 0, length = keys.length; i < length; i++) {
       //console.log(models[keys[i]]);
    };
 
    //Create a new view instance for a given Vega JSON spec
    var view = new vega
        .View(vega.parse(dailyLineChartSpec))
        .renderer('none')
        .initialize()
        .insert("pData", models[keys[0]]);
 
    //Generate static PNG file from chart
    view.toSVG()
        .then(async function (svg) {
 
            await sharp(Buffer.from(svg))
                .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .toFormat('png')
                .toFile('dbljeopardy_dailyavg.png');
        })
        .catch(function (err) {
            console.log("Error writing PNG to file:")
            console.error(err)
        });
    //  console.log(pData);
    */
}

//Add new prompt to the db
if (argv.addprompt) {
    const airdate = prompt("Airdate (YYYY-MM-DD): ");
    const modelprompt = prompt("Model prompt: ");
    const answer = prompt("Answer: ");
    const category = prompt("Category Name: ");
    const level = prompt("Level (1-6): ");
    let stmt = db.prepare('INSERT INTO prompt (airdate, category, level, amt, query, answer) VALUES (?, ?, ?, ?, ?, ?)');
    stmt.run(airdate, category, level, 2000, modelprompt, answer);
}

//Run inference on promptrows and save result
if (argv.run) {

    const modelrows = db.prepare("select * from model where  model.process = 1 ").all();

    modelrows.forEach(function (modelrow) {

        let promptrows = getUnprocessedPromptRows(modelrow.model_id);

        if (promptrows.length > 0) {

            var promptcount = 0;
            console.log("Processing prompts for model:" + modelrow.name);
            let stmt = db.prepare("INSERT INTO modelrun (model_id, args, modelfile) VALUES (?, ?, ?)");
            var result = stmt.run(modelrow.model_id, modelrow.args, path.basename(modelrow.filepath));
            let modelrunid = result.lastInsertRowid;

            const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
            bar1.start(promptrows.length, 0);

            promptrows.forEach(function (prow) {
                bar1.increment();
                var query = prow.query;
                if (prow.template) {
                    query = prow.template.replace("{{{prompt}}}", query);
                }
                var llamaargs = ' ' + prow.args;
                console.log();
                var startTime = new Date();
                let modelargs = llamaargs + " -p \"" + query + "\"";
                let exePath = llamapath + " -m " + process.env.DEVPATH + prow.filepath + modelargs;
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
                if (prow.template) {
                    var templatetokens = prow.template.split(' ');
                    templatetokens.forEach(function (token) {
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
                let stmt = db.prepare("INSERT INTO model_prompt (model_id, prompt_id, modelrun_id, answer, elapsed) VALUES (?, ?, ?, ?, ?)");
                stmt.run(prow.modelid, prow.promptid, modelrunid, answer, elapsed);

                //Update modelrun with count
                promptcount++;
                let stmt_mr = db.prepare('UPDATE modelrun SET promptcount = ? WHERE modelrun.modelrun_id = ?');
                stmt_mr.run(promptcount, modelrunid);

            })

            console.clear();
            bar1.stop();
        }

    });

}

function getBarChartData() {
    //Get current data and populate chart spec
    var sql = '';
    sql += 'select ';
    sql += 'model.name as model_name, model.color as model_color, model.textcolor as model_textcolor, model.size as model_size, model.modeldate as model_date, model.sourceurl as model_source, ';
    sql += 'SUM(model_prompt.correct) as model_sum, ';
    sql += 'MAX(DATE(prompt.airdate)) as prompt_maxdate, ';
    sql += 'AVG(LENGTH(model_prompt.answer)) as answerlen_avg, ';
    sql += 'AVG(model_prompt.correct) as model_avg, ';
    sql += 'AVG(model_prompt.elapsed) as elapsed_avg, ';
    sql += 'AVG(model_prompt.correct) * 100 as model_pct, ';
    sql += 'COUNT(model_prompt.correct) as model_total ';
    sql += 'from model ';
    sql += 'inner join model_prompt on (model.model_id = model_prompt.model_id) ';
    sql += 'inner join prompt on (prompt.prompt_id = model_prompt.prompt_id) ';
    sql += 'where graphdisplay = 1 ';
    sql += 'group by model.name, model.color, model.textcolor, model.size, model.modeldate, model.sourceurl ';
    sql += 'order by model_avg DESC, elapsed_avg ';
    var pData = [];
    const barRows = db.prepare(sql).all();
    const barDatesArray = barRows.map(dt => new Date(dt.prompt_maxdate));
    var maxdate = new Date(Math.max(...barDatesArray)).toISOString().split('T')[0];

    barRows.forEach(function (row) {
        pData.push({
            "model": row.model_name,
            "maxairdate": maxdate,
            "modelcorrect": row.model_sum,
            "percent": row.model_pct ? row.model_pct.toFixed(2) : 0,
            "elapsed": ((row.elapsed_avg) / 1000).toFixed(3),
            "modeltotal": row.model_total,
            "msize": parseFloat(row.model_size / 1000 / 1000 / 1000).toFixed(2),
            "mdate": row.model_date,
            "msource": row.model_source,
            "answerlen": row.answerlen_avg ? row.answerlen_avg.toFixed(2) : 0,
            "c": '#' + row.model_color,
            "tc": '#' + row.model_textcolor
        })
    });

    return pData;
}


function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

/**
 * Find all files recursively in specific folder with specific extension, e.g:
 * findFilesInDir('./project/src', '.html') ==> ['./project/src/a.html','./project/src/build/index.html']
 * @param  {String} startPath    Path relative to this file or other file which requires this files
 * @param  {String} filter       Extension name, e.g: '.html'
 * @return {Array}               Result files with path string in an array
 */
function findFilesInDir(startPath,filter){

    var results = [];

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            results = results.concat(findFilesInDir(filename,filter)); //recurse
        }
        else if (filename.indexOf(filter)>=0) {
            results.push(filename);
        }
    }
    return results;
}

//Grade ungraded model answers
if (argv.grade) {
    autoGrade();
}

db.close();

function manualGrade() {
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

function autoGrade() {
    console.log("Loading rows for grading...");
    let ungradedrows = getUngradedRows();
    console.log("Done!");
    console.log("Grading...");
    const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar1.start(ungradedrows.length, 0);

    ungradedrows.forEach(function (prow) {

        bar1.increment();

        //splitup multiple correct answers
        var correct_answers = prow.correct_answer.split(";");

        var model_answer = prow.model_answer.toString().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").replace("\'", "").replace("\"", "").toLowerCase();

        var correct = 0;
        for (var i = 0; i < correct_answers.length; i++) {
            correct_answers[i] = correct_answers[i].toString().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").replace("\'", "").replace("\"", "").toLowerCase();
            if (model_answer.indexOf(correct_answers[i]) != -1) {
                correct = 1;
            }
        }

        var sql = 'UPDATE model_prompt SET correct = ? WHERE model_prompt.model_id = ? and model_prompt.prompt_id = ?';
        let stmt = db.prepare(sql);
        stmt.run(correct, prow.modelid, prow.promptid);
    });

    bar1.stop();
    console.log("Done!");
}


//Get list of prompts that do not have prompt answers
function getUnprocessedPromptRows(modelid) {
    let retrows = [];
    const rows = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid from model cross join prompt where date(model.date) <= date(prompt.airdate) and modelid = " + modelid + " except select model_id, prompt_id from model_prompt").all();
    rows.forEach(function (row) {
        const prow = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid, model.filepath, model.args, model.template, prompt.query, prompt.answer, prompt.airdate from model,prompt where model.model_id = " + modelid + " and prompt.prompt_id = " + row.promptid).get();
        retrows.push(prow);
    });
    return retrows;
};

//Get list of prompts that do not have prompt answers
function getUngradedRows() {
    let retrows = [];
    const rows = db.prepare("select model.model_id as modelid, prompt.prompt_id as promptid from model cross join prompt where date(model.date) <= date(prompt.airdate) and model.process = 1 except select model_id, prompt_id from model_prompt where correct IS NOT NULL").all();
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


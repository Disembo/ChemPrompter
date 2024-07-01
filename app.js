const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let { reactions, Reaction } = require("./models/reactions");
let prevName = '';  // 保存上一次查看的反应，以便快速重新查看

app.set('view engine', 'ejs');
app.use(express.static('public')); // 提供公共文件夹中的静态文件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', { reactions: reactions });
});

app.get('/detail', (req, res) => {
    let { name } = req.query;
    if (!name)
        name = prevName;
    else
        prevName = name;

    let succ = !reactions.every(r => {
        if (r.name === name)
        {
            res.render('detail', { reaction: r });
            return false;
        }
        return true;
    });
    if (!succ)
        res.render('detail', { reaction: undefined });
});

app.get('/export', (req, res) => {
    res.json(reactions);
});

app.get('/edit', (req, res) => {
    const { name, createNew } = req.query;
    if (createNew){
        res.render('edit', { reaction: Reaction.empty() });
        return;
    } else {
        reactions.every(r => {
            if (r.name === name) {
                res.render('edit', { reaction: r });
                return false;
            }
            return true;
        });
    }
});

app.delete('/delete', (req, res) => {
    const { name } = req.body;
    let succ = false;
    let msg = '';
    reactions = reactions.filter(r => {
        if (r.name !== name)
            return true;
        succ = true;
        return false;
    });
    if (!succ) msg = `No reaction named ${name}!`;
    res.status(200).json({
        success: succ,
        message: msg,
    });
});

app.post('/save', (req, res) => {
    const { oldName, data } = req.body;
    console.log(oldName, data);
    let reaction = Reaction.fromData(data);
    const name = reaction.name;
    let succ = false;
    let msg = "";
    
    if (oldName) {  // replace
        reactions.every((r, index) => {
            if (r.name === oldName) {
                reactions[index] = reaction;
                succ = true;
                return false;
            }
            return true;
        });
        if (succ) redirect = ``;
        else msg = `No reaction named "${oldName}" to be replaced!`;
    } else {  // create
        succ = reactions.every(r => r.name !== name);
        if (succ)
            reactions.push(reaction);
         else
            msg = `Reaction named "${name}" already exists!`;
    }
    // response
    res.status(200).json({
        success: succ,
        message: msg,
    });
});

app.post('/import', (req, res) => {
    let succ = false;
    let msg = '';
    reactions = [];
    req.body.forEach(r => {
        reactions.push(
            Object.assign(Reaction.empty(), r)
        );
    });
    succ = true;
    res.status(200).json({
        success: succ,
        message: msg,
    });
});

app.get('/settings', (req, res) => {
    res.render('settings');
});

app.listen(3000, () => {
    console.log('服务器在 http://localhost:3000 上运行');
});
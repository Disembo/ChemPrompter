const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // 提供公共文件夹中的静态文件

app.get('/', (req, res) => {    
    res.render('index', {  });
});

app.listen(3000, () => {
    console.log('服务器在 http://localhost:3000 上运行');
});
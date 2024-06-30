const express = require('express');
const app = express();
const { Reaction } = require('./public/js/reactions.js');

app.set('view engine', 'ejs');
app.use(express.static('public')); // 提供公共文件夹中的静态文件

app.get('/', (req, res) => {
    let silaneSynthesis = new Reaction(
        "Silane Synthesis", 
        {
            substrates: ['CN(C)c1cccc(Br)c1'],
            products: ['CN(C)c2cccc([Si](C)(C)c1cccc(N(C)C)c1)c2'],
            agents: ['n-BuLi', 'THF','C[Si](C)(Cl)Cl']
        },
        ['-78 C to rt'], 
        {
            mass: [1000, 0, 258, 0],
            volume: [0, 35, 0, 10],
            mol: [5, 5.5, 2, 0],
            molecular_mass: [199, 0, 129, 0],
            concentration: [0,1.6,0,0],
            eq: [1,1.1, 0.4,0]
        }
    );

    const reactions = [
        silaneSynthesis
    ];
    
    res.render('index', { reactions });
});

app.listen(3000, () => {
    console.log('服务器在 http://localhost:3000 上运行');
});
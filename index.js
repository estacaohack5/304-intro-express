const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: 'Leite',
        cobertura: 'Caramelo',
        frescura: 'Uva Passa'
    });
});

app.listen(3000);
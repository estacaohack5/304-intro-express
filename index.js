const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    if(! req.body.pudim){
        res.send('Você não tem pudim!');
    }else{
        res.send(`Seu pudim é de ${req.body.pudim}`);
    }
    
});

app.get('/pudim', (req, res) => {
    res.send({
        sabor: 'Leite',
        cobertura: 'Caramelo',
        frescura: 'Uva Passa'
    });
});


app.listen(3000);
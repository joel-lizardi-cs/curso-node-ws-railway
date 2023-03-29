require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Joel Lizardi',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Joel Lizardi',
        titulo: 'Curso Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Joel Lizardi',
        titulo: 'Curso Node'
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectivo path');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`El ejemplo esta ejecutandose en http://localhost:${port}`);
});
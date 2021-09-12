const express = require('express');
const path = require('path');
const app = express();

// Creando servior express
app.listen(3000, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
})

// Archivos Estaticos
app.use(express.static('public'));
//app.use(express.static(path.resolve(__dirname, "./public")));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

// Establecer vistas
app.set('views', './views');
app.set('views engine', 'html')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});




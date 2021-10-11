const express = require('express');
const app = express();
const path = require('path');

// Archivos Estaticos
app.use(express.static('public'));

// Establecer vistas
app.set('views', './views');
app.set('views engine', 'html')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/products/home.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './views/users/register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './views/users/login.html')));
app.get('/productDetail', (req, res) => res.sendFile(path.join(__dirname, './views/products/productDetail.html')));
app.get('/productCart', (req, res) => res.sendFile(path.join(__dirname, './views/products/productCart.html')));


app.listen(3080, () =>console.log("Levantando un servidor con Express en ", "http://localhost:3080"))







/* app.use('/css', express.static(__dirname + '/public/css'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img')); */
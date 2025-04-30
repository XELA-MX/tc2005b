const http = require('http');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(cookieParser());

app.use(session({
    secret: 'stringAleatorio stringAleatorio stringAleatorio stringAleatorio stringAleatorio stringAleatorio stringAleatorio',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/testEJS", (request, response, next) => {
    response.render("home/dash");
});

const rutasHome = require('./routes/home.routes');
app.use('/home', rutasHome);

app.use((req,res) => {
    res.status(404).send('<h1><b>404</b> - Page not Found</h1>');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});
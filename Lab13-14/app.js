const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const session = require("express-session");
app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (request, response, next) => {
  response.setHeader("Content-Type", "text/plain");
  response.setHeader("Set-Cookie", "mi_cookie=123; HttpOnly");
  response.send("Hola Mundo");
  response.end();
});

app.get("/test_cookie", (request, response, next) => {
  response.setHeader("Content-Type", "text/plain");
  response.send(request.cookies.mi_cookie);
  response.end();
});

app.get("/mostrar-cookie", (request, response, next) => {
  const valorCookie = request.cookies["mi_cookie"] || "No hay cookie";
  response.render("cookie", { valor: valorCookie });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  req.session.usuario = usuario;
  res.redirect("/perfil");
});

app.get("/perfil", (req, res) => {
  if (req.session.usuario) {
    res.send(`<h1>Bienvenido, ${req.session.usuario}</h1>`);
  } else {
    res.redirect("/login");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.get("/test_session", (request, response, next) => {
  request.session.mi_variable = "valor";
  response.setHeader("Content-Type", "text/plain");
  response.send(request.session.mi_variable);
  response.end();
});

app.get("/test_session_variable", (request, response, next) => {
  response.setHeader("Content-Type", "text/plain");
  response.send(request.session.mi_variable);
  response.end();
});

const server = http.createServer((request, response) => {
  console.log(request.url);
});
app.listen(3000);

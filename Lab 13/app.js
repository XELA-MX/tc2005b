const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const comentarioRoutes = require("./routes/comentarioRoutes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(comentarioRoutes);

app.use((req, res) => {
  res.status(404).render("404", { titulo: "Página no encontrada" });
});

app.listen(5500, () => {});

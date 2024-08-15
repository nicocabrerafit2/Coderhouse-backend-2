import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();
const PORT = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log("Servidor on http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/getCookie", (req, res) => {
  res.send(req.Cookies);
  console.log(req.Cookies);
});
app.post("/setCookie", (req, res) => {
  res
    .cookie("cookieDePrueba", "Esto es solo una prueba del getCookie")
    .send("Cookie");
});

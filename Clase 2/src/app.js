import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(cookieParser("cookieConSecreto"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"))

app.listen(PORT, () => {
  console.log("Servidor on http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/getCookie", (req, res) => {
  const body = req.body
  console.log(body);
  
  res.send(req.signedCookies);
  console.log(req.signedCookies);
});
app.post("/setCookie", (req, res) => {
  const { nameClient, mailClient } = req.body;
  console.log(req.body);
  res
    .cookie(nameClient, mailClient, {
      maxAge: 19999,
      signed: true,
    })
    .send("Cookie guardada");
});
app.get("/deleteCookie", (req, res) => {
  res.clearCookie("cookieDePrueba").send("Cookie eliminada");
  console.log("Cookie eliminada");
});
app.get("/session", (req, res) => {
  
});
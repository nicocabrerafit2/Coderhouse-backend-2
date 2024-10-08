import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import cookieParser from "cookie-parser";
import session from "express-session"

const app = express();
const PORT = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(cookieParser("cookieConSecreto"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/public"))
app.use(session({
  secret:"nico",
  resave:true,
  saveUninitialized:true
}))

app.listen(PORT, () => {
  console.log("Servidor on http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/getCookie", (req, res) => {
  res.send(req.signedCookies);
});
app.post("/setCookie", (req, res) => {
  const { nameClient, mailClient } = req.body;
  res.cookie("mail", mailClient, {
      maxAge: 1999559,
      signed: true,
    })
    res.cookie("name", nameClient, {
      maxAge: 1999559,
      signed: true,
    })
    .send("Cookie saved");
});
app.get("/deleteCookie", (req, res) => {
  res.clearCookie("name")
  res.clearCookie("mail").send("Cookie deleted");
});
app.get("/session", (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 1
  }else{
    req.session.counter++
  }
  res.send("Visitas a este sitio: "+req.session.counter)
});
app.get("/logout", (req, res) => {
  req.session.destroy(err =>{
    if (!err) {res.send("Se cerro la sesion correctamente")
    }else{
  res.send({status:"Error al cerrar la sesion",body:err})
  }
  })})
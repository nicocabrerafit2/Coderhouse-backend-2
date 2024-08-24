import express from "express";
import __dirname from "./utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import viewRouter from "./routes/views.routes.js";
import sessionRouter from "./routes/session.routes.js";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", viewRouter);
app.use("/api", sessionRouter);
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://nicocabrera8:Y0BrFdDBQ23amtUR@backendcoderhouse1.nvbxjk0.mongodb.net/?retryWrites=true&w=majority&appName=BackendCoderhouse1",
      dbName: "users",
      ttl: 360,
    }),
    secret: "nicoClaveSecreta",
    resave: true,
    saveUninitialized: false,
  })
);
app.listen(PORT, () => {
  console.log("Servidor on http://localhost:" + PORT);
});
app.get("/session", (req, res) => {
  if (!req.session.counter) {
    req.session.counter = 1;
  } else {
    req.session.counter++;
  }
  res.send("Visitas a este sitio: " + req.session.counter);
});
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.send("Se cerro la sesion correctamente");
    } else {
      res.send({ status: "Error al cerrar la sesion", body: err });
    }
  });
});

mongoose
  .connect(
    "mongodb+srv://nicocabrera8:Y0BrFdDBQ23amtUR@backendcoderhouse1.nvbxjk0.mongodb.net/?retryWrites=true&w=majority&appName=BackendCoderhouse1",
    { dbName: "users" }
  )
  .then(() => {
    console.log("base de datos conectada");
  })
  .catch(() => {
    console.log("Error al conectarse con la base de datos");
  });

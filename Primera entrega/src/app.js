import express from "express";
import { AppInit } from "./initialConfiguration/initialConfig.js";

const app = express();
AppInit(app);

app.listen(process.env.PORT, () => {
  console.log("Server on http://localhosto/" + process.env.PORT);
});

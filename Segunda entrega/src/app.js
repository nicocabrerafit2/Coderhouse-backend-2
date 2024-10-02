import express from "express";
import { AppInit } from "./initialConfiguration/initialConfig.js";

const app = express();
const PORT = 8080;
AppInit(app);

app.listen(PORT, () => {
  console.log("Server on http://localhost:" + PORT);
});

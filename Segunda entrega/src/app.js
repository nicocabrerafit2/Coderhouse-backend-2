import express from "express";
import { AppInit } from "./initialConfiguration/initialConfig.js";

const app = express();
AppInit(app);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server on http://localhost:" + PORT);
});

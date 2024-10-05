import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import router from "../routes/index.js";
import connectionDB from "../persistence/mongoDB/dao/connection.js";
import initializePassport from "../middlewares/jwtPassport.js";

const AppInit = (app) => {
  dotenv.config();
  connectionDB();
  initializePassport();
  passport.initialize();
  app.use(cookieParser("elSecreto"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);
};

export { AppInit };

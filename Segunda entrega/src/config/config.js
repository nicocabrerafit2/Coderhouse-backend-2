import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import router from "../routes/index.js";
import initializePassport from "../middlewares/jwtPassport.js";
import { persistenceDaoInit } from "../persistence/factory.js";

const AppInit = (app) => {
  dotenv.config();
  persistenceDaoInit();
  initializePassport();
  passport.initialize();
  app.use(cookieParser(process.env.SECRET));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/", router);
};

export { AppInit };

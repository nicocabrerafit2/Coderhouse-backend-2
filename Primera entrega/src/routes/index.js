import { Router } from "express";
import SessionRouter from "./session.router.js";
const ROUTE_PATH = "/api/sessions/";
const app = Router();

app.use(ROUTE_PATH, SessionRouter);

export default app;

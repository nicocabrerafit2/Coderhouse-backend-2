import { Router } from "express";
import SessionRouter from "./session.router.js";

const router = Router();

router.use("/api/sessions/", SessionRouter);

export default router;

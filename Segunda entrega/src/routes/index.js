import { Router } from "express";
import userRouter from "./userRouter.js";

const router = Router();

router.use("/api/sessions/", userRouter);

export default router;

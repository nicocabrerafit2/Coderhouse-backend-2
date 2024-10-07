import { Router } from "express";
import userRouter from "./userRoutes.js";
import viewsRoutes from "./viewsRoutes.js";

const UserRouter = new userRouter();
const router = Router();

router.use("/api/sessions/", UserRouter.getRouter());
router.use("/users", viewsRoutes);

export default router;

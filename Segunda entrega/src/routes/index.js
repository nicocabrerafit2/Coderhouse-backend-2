import { Router } from "express";
import userRouter from "./userRoutes.js";
import productRouter from "./productsRoutes.js";
import viewsRoutes from "./viewsRoutes.js";

const UserRouter = new userRouter();
const ProductRouter = new productRouter();
const router = Router();

router.use("/api/sessions/", UserRouter.getRouter());
router.use("/api/products/", ProductRouter.getRouter());
router.use("/users", viewsRoutes);

export default router;

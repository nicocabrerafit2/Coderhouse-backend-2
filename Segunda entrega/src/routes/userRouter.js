import { Router } from "express";
import UserController from "../controllers/userController.js";
import { invokePassport } from "../middlewares/handlerError.js";
const userController = new UserController();
const router = Router();

router.post("/login", userController.login);
router.post("/register", userController.register);

router.get("/current", invokePassport("jwt"), (req, res) => {
  res.send("Bienvenido " + req.user.nombre);
});
router.get("*", (req, res) => {
  res.send("Error no se encontro la ruta");
});

export default router;
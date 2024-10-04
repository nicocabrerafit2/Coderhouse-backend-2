import { Router } from "express";
import { login, register } from "../controllers/userController.js";
import { invokePassport } from "../middlewares/handlerError.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);

router.get("/current", invokePassport("jwt"), (req, res) => {
  res.send("Bienvenido " + req.user.nombre);
});

export default router;

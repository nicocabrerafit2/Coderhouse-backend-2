import { Router } from "express";
import { invokePassport } from "../middlewares/handlerError.js";
const router = Router();

router.get("/login", (req, res) => {
  if (!req.signedCookies.currentUser) {
    return res.send("Por favor loguearse");
  }
  return res.redirect("/users/current");
});

router.get("/current", invokePassport("jwt"), (req, res) => {
  res.send("Bienvenido " + req.user.email);
});
router.get("*", (req, res) => {
  res.send("Error no se encontro la ruta");
});

export default router;

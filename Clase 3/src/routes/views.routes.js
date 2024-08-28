import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/register", isLog, (req, res) => {
  res.render("register", {});
});
router.get("/login", isLog, (req, res) => {
  res.render("login", {});
});
router.get("/perfil", isAuth, (req, res) => {
  const user = req.session.user;
  const isLog = req.session.isLog;
  res.render("perfil", { user, isLog });
});
export default router;

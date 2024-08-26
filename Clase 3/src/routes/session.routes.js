import { Router } from "express";
import { users } from "../models/user.model.js";
const router = Router();

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;

  try {
    await users.create({ first_name, last_name, email, age, password });
    res.status(201).json({ message: "Usuario creado" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email, password }).lean();
    console.log(user);
    if (!user) {
      return res.json({ message: "usuario no encontrado con ese mail" });
    } else {
      req.session.isLog = true;
      req.session.user = {
        name: user.first_name,
        age: user.age,
        apellido: user.last_name,
      };
      return res.json({ message: "Te logueaste" });
    }
  } catch (error) {
    console.log("Error al loguearse" + error);
    res.status(404).json({ message: "Error al loguearse" });
  }
});
router.get("/getSession", (req, res) => {
  res.json({ session: req.session });
});

export default router;

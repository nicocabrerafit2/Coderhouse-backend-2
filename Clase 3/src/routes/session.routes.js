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

export default router;

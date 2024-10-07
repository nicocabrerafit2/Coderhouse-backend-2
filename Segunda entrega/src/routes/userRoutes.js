import UserController from "../controllers/userController.js";
import BasicRouter from "./basicRouter.js";

const userController = new UserController();

export default class UserRouter extends BasicRouter {
  init() {
    this.post("/login", ["PUBLIC"], userController.login);
    this.post("/register", ["PUBLIC"], userController.register);

    this.get("/:id", ["USER"], (req, res) => {
      res.success(req.params.id);
    });

    this.get("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
  }
}

import UserController from "../controllers/userController.js";
import BasicRouter from "./basicRouter.js";

const userController = new UserController();

export default class UserRouter extends BasicRouter {
  init() {
    this.post("/login", ["PUBLIC"], userController.login);
    this.post("/register", ["PUBLIC"], userController.register);

    this.get("/mail", ["PUBLIC"], userController.sendMail);
    this.get("/send", ["USER"], userController.sendMessagePhone);
    /*this.get("/:id", ["USER"], (req, res) => {
      if (typeof req.params.id != Number) {
        return res.send("id no válido, verifique su endpoint");
      }
      res.success(req.params.id);
    });
*/
    this.get("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
    this.post("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
  }
}

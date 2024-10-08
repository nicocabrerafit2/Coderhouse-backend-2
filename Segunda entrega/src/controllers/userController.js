import UserService from "../services/userServices.js";
import { createResponse } from "../utils/utils.js";
import basicController from "./basicController.js";

const userService = new UserService();

class UserController extends basicController {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
      const data = await this.service.register(req.body);
      if (data === null) {
        createResponse(res, 404, {
          message: "Este email ya se encuentra registrado",
        });
      } else {
        !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
      }
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await this.service.login(req.body);
      if (token === null) {
        createResponse(res, 404, {
          message: "Email o contraseña incorrectos",
        });
      } else {
        !token
          ? createResponse(res, 404, token)
          : res
              .status(200)
              .cookie("currentUser", token, {
                maxAge: 600000,
                signed: true,
                httpOnly: true,
              })
              .json({ message: "login OK", token });
      }
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;

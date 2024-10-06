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
      !data ? createResponse(res, 404, data) : createResponse(res, 200, data);
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const token = await this.service.login(req.body);
      !token
        ? createResponse(res, 404, token)
        : createResponse(res, 200, token);
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;
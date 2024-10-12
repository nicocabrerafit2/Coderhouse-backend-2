import UserService from "../services/userServices.js";
import { createResponse } from "../utils/utils.js";
import basicController from "./basicController.js";
import { userDTOReq, userDTORes } from "../persistence/DTO/userDTO.js";
const userService = new UserService();

class UserController extends basicController {
  constructor() {
    super(userService);
  }

  register = async (req, res, next) => {
    try {
      const userData = new userDTOReq(req.body);
      const data = await this.service.register(userData);
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
      const userData = new userDTOReq(req.body);
      const token = await this.service.login(userData);
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
  sendMail = async (req, res, next) => {
    try {
      const mailSend = await this.service.sendMail(req.body);
      if (!mailSend) {
        createResponse(res, 404, {
          message: "Error al enviar el mail",
        });
      } else {
        createResponse(res, 200, {
          message: "Mail enviado con éxito",
        });
      }
    } catch (error) {
      next(error);
    }
  };
  sendMessagePhone = async (req, res, next) => {
    try {
      await client.messages.create({
        body: ``,
        from: process.env.TWILIO_NUMBER, // el numeor de twilio
        to: "+541167588854",
      });
    } catch (error) {
      next(error);
    }
  };
}
export default UserController;

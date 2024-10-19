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
        createResponse(res, !data ? 404 : 200, data);
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
  /*
  ----------------ENVIO DE MENSAJE POR CELULAR NO APLICADO ---------------
  sendMessagePhone = async (req, res, next) => {
    try {
      await client.messages.create({
        body: ``,
        from: process.env.TWILIO_NUMBER, // el numeor de twilio
        to: "+5411-----",
      });
    } catch (error) {
      next(error);
    }
  };
    -----------------------------------------------------------------------
    */
}
export default UserController;

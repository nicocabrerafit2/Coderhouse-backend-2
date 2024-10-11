import { createHash, generadorToken, isValidPassword } from "../utils/utils.js";
import UserAccessMongo from "../persistence/mongoDB/dao/userDao.js";
import basicServices from "./basicServices.js";
import { transport } from "../utils/utils.js";
import { __dirname } from "../utils/utils.js";
import path from "path";
import { userDTOReq, userDTORes } from "../DTO/userDTO.js";
const userDAO = new UserAccessMongo();

class UserService extends basicServices {
  constructor() {
    super(userDAO);
  }

  async register(user) {
    try {
      const { email, password } = user;
      const existUser = await this.dao.getByEmail(email);
      if (!existUser) {
        const newUser = await this.dao.create({
          ...user,
          password: createHash(password),
        });
        return newUser;
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(user) {
    try {
      const { email, password } = user;
      const userExist = await this.dao.getByEmail(email);
      if (!userExist) return null;
      const passValid = isValidPassword(userExist, password);
      if (!passValid) return null;
      if (userExist && passValid) {
        const data = new userDTORes(userExist);
        return generadorToken({ data });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  async sendMail(user) {
    try {
      const mailSend = await transport.sendMail({
        from: "NC developer <nicocabrera8@gmail.com>",
        to: "nicocabrera8@outlook.com",
        subject: "Prueba de envío de mail automático",
        html: `
            <div>
                <p> Saludos desde nodemailer(librería para enviar mails)</p>
                <a href="https://goole.com.ar" target="__blank"> 
                    <img src="cid:img01" />
                </a>
            </div>
        `,
        attachments: [
          {
            filename: "Hay_tabla.png",
            path: path.join(__dirname, "..", "/img/Hay_tabla.png"),
            cid: "img01",
          },
        ],
      });
      return mailSend;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserService;
//hasta aca
/*
import { UserModel } from "../persistence/mongoDB/models/userModel.js";
import { createHash, generadorToken, isValidPassword } from "../utils/utils.js";

const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const userFound = await UserModel.findOne({ email }).lean();

    if (isValidPassword(userFound, password)) {
      const token = generadorToken({
        email: userFound.email,
        nombre: userFound.nombre,
        rol: userFound.rol,
      });
      return res
        .status(200)
        .cookie("currentUser", token, {
          maxAge: 60000,
          signed: true,
          httpOnly: true,
        })
        .json({ message: "login OK", token });
    }
    return res.status(200).json({ message: "error login" });
  } catch (e) {
    return res.json({ message: "Error: " + e });
  }
};

const register = async (req, res) => {
  try {
    const { nombre, apellido, email, rol, password, edad } = req.body;
    const newUser = {
      nombre,
      apellido,
      email,
      rol,
      edad,
      password: createHash(password),
    };

    const user = await UserModel.create(newUser);
    return res
      .status(201)
      .json({ message: `Usuario creado -> ${user.nombre}` });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export { login, register };
*/

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createHash = (pass) => {
  bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
};

const isValidPassword = (user, pass) => {
  bcrypt.compareSync(pass, user.password);
};

const getJWTCookie = (req) => {
  let token = null;
  if (req.signedCookies) {
    token = req.signedCookies["currentUser"];
  }
  return token;
};

const generadorToken = (user) => {
  const token = jwt.sign(user, "elSecreto", { expiresIn: "24h" });
  return token;
};

export { __dirname, createHash, isValidPassword, getJWTCookie, generadorToken };

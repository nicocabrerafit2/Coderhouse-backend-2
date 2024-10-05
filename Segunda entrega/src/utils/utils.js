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
  const token = jwt.sign(user, process.env.SECRET, { expiresIn: "24h" });
  return token;
};

const createResponse = (res, statusCode, data) => {
  return res.status(statusCode).json({ data });
};

export {
  __dirname,
  createHash,
  isValidPassword,
  getJWTCookie,
  generadorToken,
  createResponse,
};

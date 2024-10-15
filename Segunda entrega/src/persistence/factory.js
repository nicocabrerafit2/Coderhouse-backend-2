import { memoryDao } from "./memory/dao/memoryDao.js";
import mongoConennect from "../persistence/mongoDB/dao/connection.js";
import UserAccessMongo from "../persistence/mongoDB/dao/userDao.js";
import { userModelMongo } from "../persistence/mongoDB/models/userModel.js";
import ProductAccessMongo from "../persistence/mongoDB/dao/productDao.js";
import { productModelMongo } from "../persistence/mongoDB/models/productModel.js";
let persistenceDaoInit;
let userDAO;
let userModel;
let productDAO;
let productModel;
const persistence = process.argv[2];

switch (persistence) {
  case "--mongo":
    persistenceDaoInit = function () {
      return mongoConennect.getInstance();
    };
    productModel = productModelMongo;
    userModel = userModelMongo;
    productDAO = new ProductAccessMongo();
    userDAO = new UserAccessMongo();
    //metodo singleton para conexion a mongo
    break;
  case "--memory":
    persistenceDaoInit = function () {
      return console.log("Utilizando persistencia memory");
    };
    userDAO = new memoryDao();
    userModel = userModelMongo; //Aca va el modelo de memoria

    break;
  default:
    persistenceDaoInit = function () {
      return mongoConennect.getInstance();
    };
    productModel = productModelMongo;
    userModel = userModelMongo;
    productDAO = new ProductAccessMongo();
    userDAO = new UserAccessMongo();
    break;
}

export { persistenceDaoInit, userDAO, userModel, productModel, productDAO };

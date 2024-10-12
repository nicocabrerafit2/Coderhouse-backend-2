import { memoryDao } from "./memory/dao/memoryDao.js";
import mongoConennect from "../persistence/mongoDB/dao/connection.js";
import UserAccessMongo from "../persistence/mongoDB/dao/userDao.js";
import { userModelMongo } from "../persistence/mongoDB/models/userModel.js";
let persistenceDaoInit;
let userDAO;
let userModel;
const persistence = process.argv[2];

switch (persistence) {
  case "--mongo":
    persistenceDaoInit = function () {
      return mongoConennect.getInstance();
    };
    userModel = userModelMongo;
    userDAO = new UserAccessMongo(); //metodo singleton para conexion a mongo
    // ProductDao = new ProductMondo();
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
    userModel = userModelMongo;
    userDAO = new UserAccessMongo();
    break;
}

export { persistenceDaoInit, userDAO, userModel };

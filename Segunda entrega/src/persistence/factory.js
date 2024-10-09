import { memoryDao } from "./memory/dao/memoryDao.js";
import mongoConennect from "../persistence/mongoDB/dao/connection.js";

let persistenceDaoInit;
let persistenceDao;
const persistence = process.argv[2];

switch (persistence) {
  case "--mongo":
    persistenceDaoInit = function () {
      return mongoConennect.getInstance();
    }; //metodo singleton para conexion a mongo
    // ProductDao = new ProductMondo();
    break;
  case "--memory":
    persistenceDaoInit = function () {
      console.log("Utilizando persistencia memory");
      return (persistenceDao = new memoryDao());
    };

    break;
  default:
    persistenceDaoInit = function () {
      return mongoConennect.getInstance();
    }; //metodo singleton para conexion a mongo
    // ProductDao = new ProductMondo();
    break;
}

export default persistenceDaoInit;

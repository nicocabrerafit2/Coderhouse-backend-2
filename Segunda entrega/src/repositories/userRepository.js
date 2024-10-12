import { userDTOReq } from "../persistence/DTO/userDTO.js";
export default class userRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => {
    let result = await this.dao.getAll();
    return result;
  };
  create = async (user) => {
    const userData = new userDTOReq(user);
    let result = await this.dao.create(userData);
    return result;
  };
  getById = async (id) => {
    let result = await this.dao.getById(id);
    return result;
  };
  getByEmail = async (email) => {
    let result = await this.dao.getByEmail(email);
    return result;
  };
  update = async (id, user) => {
    const userData = new userDTOReq(user);
    let result = await this.dao.update(id, userData);
    return result;
  };
  delete = async (id) => {
    let result = await this.dao.delete(id);
    return result;
  };
}

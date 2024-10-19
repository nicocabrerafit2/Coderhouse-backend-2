import { userDTOReq } from "../persistence/DTO/userDTO.js";
export default class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => await this.dao.getAll();

  create = async (user) => {
    const userData = new userDTOReq(user);
    return await this.dao.create(userData);
  };

  getById = async (id) => await this.dao.getById(id);

  getByEmail = async (email) => await this.dao.getByEmail(email);

  update = async (id, user) => {
    const userData = new userDTOReq(user);
    return await this.dao.update(id, userData);
  };

  delete = async (id) => await this.dao.delete(id);
}

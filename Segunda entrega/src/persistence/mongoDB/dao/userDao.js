import mongoDao from "./basicDao.js";
import { userModelMongo } from "../models/userModel.js";

class UserAccessMongo extends mongoDao {
  constructor() {
    super(userModelMongo);
  }

  async getByEmail(email) {
    try {
      return await this.model.findOne({ email }).lean();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UserAccessMongo;

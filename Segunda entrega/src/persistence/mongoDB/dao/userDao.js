import mongoDao from "./basicDao.js";
import { userModel } from "../models/userModel.js";

class UserAccessMongo extends mongoDao {
  constructor() {
    super(userModel);
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

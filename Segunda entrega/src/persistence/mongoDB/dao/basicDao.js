class mongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.find({});
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      return error;
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      return error;
    }
  }
}

export default mongoDao;

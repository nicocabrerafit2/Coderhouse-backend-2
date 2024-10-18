class basicServices {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {
    try {
      return await this.repository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      return await this.repository.getById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      const pepe = await this.repository.create(obj);
      return pepe;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, obj) {
    try {
      return await this.repository.update(id, obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.repository.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default basicServices;

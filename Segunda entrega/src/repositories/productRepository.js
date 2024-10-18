export default class productRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => {
    let result = await this.dao.getAll();
    return result;
  };
  create = async (product) => {
    let result = await this.dao.create(product);
    return result;
  };
  getById = async (id) => {
    let result = await this.dao.getById(id);
    return result;
  };
  update = async (id, product) => {
    let result = await this.dao.update(id, product);
    return result;
  };
  delete = async (id) => {
    let result = await this.dao.delete(id);
    return result;
  };
}

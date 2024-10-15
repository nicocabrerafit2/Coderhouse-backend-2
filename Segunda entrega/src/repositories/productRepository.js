import { productDTOReq } from "../persistence/DTO/productDTO.js";
export default class productRepository {
  constructor(dao) {
    this.dao = dao;
  }
  getAll = async () => {
    let result = await this.dao.getAll();
    return result;
  };
  create = async (product) => {
    const productData = new productDTOReq(product);
    let result = await this.dao.create(productData);
    return result;
  };
  getById = async (id) => {
    let result = await this.dao.getById(id);
    return result;
  };
  update = async (id, product) => {
    const productData = new productDTOReq(product);
    let result = await this.dao.update(id, productData);
    return result;
  };
  delete = async (id) => {
    let result = await this.dao.delete(id);
    return result;
  };
}

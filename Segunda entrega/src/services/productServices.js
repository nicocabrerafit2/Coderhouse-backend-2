import { ProductRepository } from "../repositories/index.js";
import basicServices from "./basicServices.js";
import { __dirname } from "../utils/utils.js";
import path from "path";
import { productDTOReq, productDTORes } from "../persistence/DTO/productDTO.js";

class ProductService extends basicServices {
  constructor() {
    super(ProductRepository);
  }
  async create(product) {
    const { title, description, code, price, stock, category } = product;
    if (title && description && code && price && stock && category) {
      if (typeof title !== "string") {
        throw new Error("El campo title debe ser un texto (string)");
      }
      if (typeof description !== "string") {
        throw new Error("El campo description debe ser un texto (string)");
      }
      if (typeof code !== "string") {
        throw new Error("El campo code debe ser un texto (string)");
      }
      if (typeof price !== "number") {
        throw new Error("El campo price debe ser un número (Number)");
      }
      if (typeof stock !== "number") {
        throw new Error("El campo stock debe ser un número (Number)");
      }
      if (typeof category !== "string") {
        throw new Error("El campo category debe ser un texto (string)");
      }
      if (body.thumbnails) {
        if (!Array.isArray(body.thumbnails)) {
          throw new Error(
            "El campo thumbnails debe ser un arreglo de strings (array)"
          );
        }
      }
      return await super.create(product);
    } else {
      throw new Error("Todos los campos deben estar completos.");
    }
  }
}

export default ProductService;

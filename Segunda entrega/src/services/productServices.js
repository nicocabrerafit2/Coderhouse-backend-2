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
    const { title, description, code, price, stock, category } = body;
    if (title && description && code && price && stock && category) {
      if (typeof title !== "string") {
        return {
          status: "error",
          messaje: "El campo title debe ser un texto (string)",
        };
      }
      if (typeof description !== "string") {
        return {
          status: "error",
          messaje: "El campo description debe ser un texto (string)",
        };
      }
      if (typeof code !== "string") {
        return {
          status: "error",
          messaje: "El campo code debe ser un texto (string)",
        };
      }
      if (typeof price !== "number") {
        return {
          status: "error",
          messaje: "El campo price debe ser un número (Number)",
        };
      }
      if (typeof stock !== "number") {
        return {
          status: "error",
          messaje: "El campo stock debe ser un número (Number)",
        };
      }
      if (typeof category !== "string") {
        return {
          status: "error",
          messaje: "El campo category debe ser un texto (string)",
        };
      }
      if (body.thumbnails) {
        if (!Array.isArray(body.thumbnails)) {
          return {
            status: "error",
            messaje:
              "El campo thumbnails debe ser un arreglo de strings (array)",
          };
        }
      }
      const newProductWithId = {
        ...body,
        status: true,
      };
      await productDb.create(newProductWithId);

      return {
        status: "succes",
        messaje: "Se agregó correctamente el producto.",
      };
    } else {
      return {
        messaje: "Es requisito que complete todos los campos",
      };
    }
  }
}

export default ProductService;

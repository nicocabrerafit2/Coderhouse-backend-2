import { productService } from "../repositories/index.js";
import basicServices from "./basicServices.js";
import { __dirname } from "../utils/utils.js";
import path from "path";
import { productDTOReq, productDTORes } from "../persistence/DTO/productDTO.js";
const productDAO = productService;

class ProductService extends basicServices {
  constructor() {
    super(productDAO);
  }
}

export default ProductService;

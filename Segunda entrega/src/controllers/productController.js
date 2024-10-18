//Funcion del controller:
//*Devuelve las respuestas HTTP.
//* Coordina y direcciona las solicitudes al servicio correspondiente.
import ProductService from "../services/productServices.js";
import basicController from "./basicController.js";
const productService = new ProductService();

class ProductController extends basicController {
  constructor() {
    super(productService);
  }
}
export default ProductController;

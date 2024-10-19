import { CartRepository } from "../repositories/index.js";
import basicServices from "./basicServices.js";

class CartService extends basicServices {
  constructor() {
    super(CartRepository);
  }
  async addProductInCart(req, res) {
    const cartsInDatabase = await this.showDataBase();
    const cartFinded = cartsInDatabase.find(
      (item) => item._id == req.params.idcart
    );
    if (cartFinded) {
      const productExistInCart = cartFinded.products.find(
        (item) => item.product._id == req.params.idproduct
      );
      if (productExistInCart) {
        productExistInCart.quantity = productExistInCart.quantity + 1;
        await cartDb.updateOne({ _id: req.params.idcart }, cartFinded);
        return {
          messaje:
            "Se agregó una unidad mas del producto con id:" +
            req.params.idproduct +
            " al carrito con id:" +
            req.params.idcart,
        };
      } else {
        const productInCart = {
          product: req.params.idproduct,
          quantity: 1,
        };
        cartFinded.products.push(productInCart);
        try {
          await cartDb.updateOne({ _id: req.params.idcart }, cartFinded);
          return {
            messaje:
              "Se agregó el producto con id:" +
              req.params.idproduct +
              " al carrito con id:" +
              req.params.idcart,
          };
        } catch {
          return {
            status: "error",
            messaje: "Problemas al agregar el producto en el carrito",
          };
        }
      }
    } else {
      return {
        status: "error",
        messaje: "Ese carrito no se encuentra en la base de datos",
      };
    }
  }
}

export default CartService;

import CartService from "../services/cartServices.js";
import basicController from "./basicController.js";
const cartService = new CartService();

class CartController extends basicController {
  constructor() {
    super(cartService);
  }
  addProductInCart = async (req, res, next) => {
    try {
      const { cartId, productId } = req.params;
      const data = await this.service.addProductInCart(cartId, productId);
      createResponse(
        res,
        !data ? 404 : 200,
        !data
          ? {
              message: "No se puede agregar el producto al carrito",
            }
          : data
      );
    } catch (error) {
      const statusCode = error.statusCode || 500;
      createResponse(res, statusCode, error.message);
    }
  };
  updateQuantityProductInCart = async (req, res, next) => {
    try {
      const data = await this.service.updateQuantityProductInCart(req);
      if (!data) {
        createResponse(res, 404, {
          message: "No se pudo agregar o quitar unidades",
        });
      } else {
        createResponse(res, !data ? 404 : 200, data);
      }
    } catch (error) {
      const statusCode = error.statusCode || 500;
      createResponse(res, statusCode, error.message);
    }
  };
  deleteProductFromCart = async (req, res, next) => {
    try {
      const data = await this.service.addProductInCart(req);
      if (!data) {
        createResponse(res, 404, {
          message: "No se pudo eliminar el producto del carrito",
        });
      } else {
        createResponse(res, !data ? 404 : 200, data);
      }
    } catch (error) {
      const statusCode = error.statusCode || 500;
      createResponse(res, statusCode, error.message);
    }
  };
}

export default CartController;

/*import { cartDb } from "../models/carts.model.js";
class CartManager {
  constructor() {
  }
  async showDataBase() {
    const cartInDataBase = await cartDb.find().populate("products.product").lean();
    return cartInDataBase;
  }

  async cartsInDatabase() {
    const cartsInDatabase = await this.showDataBase();
    if (cartsInDatabase.length) {
      return cartsInDatabase;
    } else
      return {
        messaje:
          "Se realizo la busqueda y no se encontró ningun carrito en la base de datos",
      };
  }
  async addCart() {
    await cartDb.create({ products: [] });
    return { messaje: "Se agregó correctamente el nuevo carrito." };
  }
  async getCartById(cartId) {
    try {
      const cartFinded = await cartDb.findById(cartId).populate("products.product").lean();
      if (cartFinded.products.length) {
        return cartFinded.products;
      }
      return {
        message:
          "Este carrito aun no tiene productos cargados dentro del mismo",
      };
    } catch {
      return {
        message:
          "El carrito con el id:" + cartId + " no existe en la base de datos",
      };
    }
  }
 
     
      }
   clearCart(idcart) {
  try {
    const cartFinded = await cartDb.findById(idcart);
       cartFinded.products = [];
       try {
        await cartDb.updateOne(
          { _id: idcart },cartFinded
        );
        return {
          message:
            "Se han quitado todos los productos del carrito con el id:" + idcart,
        };
      } catch {
        return {
          message:
            "Este carrito no tiene productos cargados para ser eliminados del mismo",
        };
      }
  } catch {
    return {
      message:
        "El carrito con el id:" + idcart + " no existe en la base de datos",
    };
  }
}

async deleteOneProductFronCart(params){
  const cartsInDatabase = await this.showDataBase();
  const cartFinded = cartsInDatabase.find((item) => item._id == params.idcart);
  if (cartFinded) {
    const productExistInCart = cartFinded.products.filter(product => product.product !== params.idproduct)
 const cartModificated = {...cartFinded,products:productExistInCart}
      await cartDb.updateOne(
        { _id: params.idcart },cartModificated
      );
      return {
        messaje:
          "Se eliminaron todas las unidades del producto con id:" +
          params.idproduct +
          " del carrito con id:" +
          params.idcart,
      };
  }else{
    return{
      messaje:
        "Ese carrito no existe"
    };
  }}
  async modificateQuantityProductFromCart(params,body){
    const cartsInDatabase = await this.showDataBase();
    const cartFinded = cartsInDatabase.find((item) => item._id == params.idcart);
    if (cartFinded) {
      const productExistInCart = cartFinded.products.find(
        (item) => item.product._id == params.idproduct
      );
      if (productExistInCart) {
        productExistInCart.quantity = body.quantity
        await cartDb.updateOne(
          { _id: params.idcart },cartFinded)
          return {
            messaje:
              "Se modifico el quantity del producto" }
       }else {return{ messaje: "Ese producto aun no existe en este carrito, por lo tanto no podes cambiar la cantidad" };}
      }else{  return{    messaje:      "Ese carrito no existe"  };
}  }

async modificateCart(params,body){
  const cartsInDatabase = await this.showDataBase();
  const cartFinded = cartsInDatabase.find((item) => item._id == params.idcart);
  if (cartFinded) {
    const cartModificated = {...cartFinded,products:body}
      await cartDb.updateOne(
        { _id: params.idcart },cartModificated)
        return {
          messaje:
            "Se cambiaron todos los productos del carrito, por el arreglo de productos enviado por body" }
    }else{  return{    messaje:      "Ese carrito no existe"  };
}  }












}
export { CartManager }
*/

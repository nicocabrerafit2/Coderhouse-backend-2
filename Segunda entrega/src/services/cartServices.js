import { CartRepository } from "../repositories/index.js";
import basicServices from "./basicServices.js";
import validationError from "../middlewares/ValidationError.js";

class CartService extends basicServices {
  constructor() {
    super(CartRepository);
  }
  async create(userId) {
    try {
      const newCart = {
        user: userId,
        products: [],
        status: "active",
      };
      return await this.repository.create(newCart);
    } catch (error) {
      throw new Error(error);
    }
  }
  async addProductInCart(cartId, productId) {
    try {
      const cart = await super.getById(cartId);
      if (!cart) {
        throw new validationError(
          "Ese carrito no se encuentra en la base de datos",
          404
        );
      }
      const productExistInCart = cart.products.find(
        (item) => item.product.toString() === productId
      );
      if (productExistInCart) {
        productExistInCart.quantity += 1;
      } else {
        cart.products.push({ product: productId, quantity: 1 });
      }

      await super.update(cartId, cart);
      return {
        message: productExistInCart
          ? `Se agregó una unidad más del producto con id: ${productId} al carrito con id: ${cartId}`
          : `Se agregó el producto con id: ${productId} al carrito con id: ${cartId}`,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
  async updateQuantityProductInCart(cartId, productId, quantity) {
    try {
      const cart = await super.getById(cartId);
      if (!cart) {
        throw new validationError(
          "Ese carrito no se encuentra en la base de datos",
          404
        );
      }

      const productExistInCart = cart.products.find(
        (item) => item.product.toString() === productId
      );
      if (!productExistInCart) {
        throw new validationError(
          "El producto no se encuentra en el carrito",
          404
        );
      }

      productExistInCart.quantity = quantity;
      await super.update(cartId, cart);
      return {
        message: `Cantidad del producto con id: ${productId} actualizada a ${quantity} en el carrito con id: ${cartId}`,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProductFromCart(cartId, productId) {
    try {
      const cart = await super.getById(cartId);
      if (!cart) {
        throw new validationError(
          "Ese carrito no se encuentra en la base de datos",
          404
        );
      }

      const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );
      if (productIndex === -1) {
        throw new validationError(
          "El producto no se encuentra en el carrito",
          404
        );
      }

      cart.products.splice(productIndex, 1);
      await super.update(cartId, cart);
      return {
        message: `El producto con id: ${productId} ha sido eliminado del carrito con id: ${cartId}`,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CartService;

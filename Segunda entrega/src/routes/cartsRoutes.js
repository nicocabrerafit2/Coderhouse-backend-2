import CartController from "../controllers/cartController.js";
import BasicRouter from "./basicRouter.js";

const cartController = new CartController();

export default class CartRouter extends BasicRouter {
  init() {
    this.get("/:id", ["PUBLIC", "ADMIN", "USER"], (req, res) =>
      cartController.getById(req, res)
    );
    this.post("/:cartId/:productId", ["PUBLIC", "USER"], (req, res) =>
      cartController.addProductInCart(req, res)
    );
    this.put("/:cartId/:productId", ["PUBLIC", "USER"], (req, res) =>
      cartController.updateQuantityProductInCart(req, res)
    );
    this.delete("/:cartId/:productId", ["PUBLIC", "USER"], (req, res) =>
      cartController.deleteProductFromCart(req, res)
    );
    this.post("/:cartId/purchase", ["PUBLIC", "USER"], (req, res) =>
      cartController.addProductInCart(req, res)
    );

    this.post("/:cartId/purchase", ["PUBLIC", "USER"], (req, res) =>
      cartController.purchaseCart(req, res)
    );
  }
}

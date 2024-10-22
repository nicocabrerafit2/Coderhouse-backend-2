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
    this.put("/:id", ["PUBLIC", "USER"], (req, res) =>
      cartController.update(req, res)
    );
    this.put("/:cartId/:productId", ["PUBLIC", "USER"], (req, res) =>
      cartController.updateQuantityProductInCart(req, res)
    );
    this.delete("/:id", ["PUBLIC", "USER"], (req, res) =>
      cartController.delete(req, res)
    );
    this.delete("/:cartId/:productId", ["PUBLIC", "USER"], (req, res) =>
      cartController.deleteProductFromCart(req, res)
    );

    this.get("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
    this.post("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
  }
}

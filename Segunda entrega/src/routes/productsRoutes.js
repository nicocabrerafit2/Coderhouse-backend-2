import ProductController from "../controllers/productController.js";
import BasicRouter from "./basicRouter.js";

const productController = new ProductController();

export default class ProductRouter extends BasicRouter {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => productController.getAll(req, res));
    this.get("/:id", ["PUBLIC"], (req, res) =>
      productController.getById(req, res)
    );
    this.post("/", ["PUBLIC"], (req, res) =>
      productController.create(req, res)
    );
    this.put("/:id", ["PUBLIC"], (req, res) =>
      productController.update(req, res)
    );
    this.delete("/:id", ["PUBLIC"], (req, res) =>
      productController.delete(req, res)
    );

    this.get("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
    this.post("*", (req, res) => {
      res.send("Error no se encontro la ruta");
    });
  }
}
/*
import { Router } from "express";
import { ProductManager } from "../Class/productManager.js";
const router = Router();
const newProductManager = new ProductManager();
router.get("/", async (req, res) => {
  const { limit, page, sort, category } = req.query;
  const products = await newProductManager.getProducts(
    limit,
    page,
    sort,
    category
  );
  return res.json(products);
});
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const productFinded = await newProductManager.getProductById(productId);
  res.json(productFinded);
});
router.post("/", async (req, res) => {
  const body = req.body;
  const addProduct = await newProductManager.addProduct(body);
  res.json(addProduct);
});
router.put("/:productId", async (req, res) => {
  const body = req.body;
  const productId = req.params.productId;
  const modifyProduct = await newProductManager.modifyProduct(productId, body);
  res.json(modifyProduct);
});
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;
  const deleteProduct = await newProductManager.deleteProduct(productId);
  res.json(deleteProduct);
});

export default router;
*/

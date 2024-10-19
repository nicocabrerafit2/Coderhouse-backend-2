import { Router } from "express";
import { handlePolicies } from "../middlewares/validationRoutes.js";

export default class BasicRouter {
  constructor() {
    this.router = Router();
    this.handlePolicies = handlePolicies;
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, policies, ...cb) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      //this.customResponses,
      this.applyCallbacks(cb)
    );
  }

  post(path, policies, ...cb) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      //this.customResponses,
      this.applyCallbacks(cb)
    );
  }

  put(path, policies, ...cb) {
    this.router.put(
      path,
      this.handlePolicies(policies),
      //this.customResponses,
      this.applyCallbacks(cb)
    );
  }
  delete(path, policies, ...cb) {
    this.router.delete(
      path,
      this.handlePolicies(policies),
      //this.customResponses,
      this.applyCallbacks(cb)
    );
  }

  applyCallbacks(cb) {
    return cb.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (e) {
        return params[1].status(500).send(e); // params[1] -> res
      }
    });
  }

  /* customResponses(req, res, next) {
    res.success = (payload) => res.json({ status: "success", payload });
    res.errorServer = (error) =>
      res.status(500).json({ status: "server error", error });
    res.notFound = () =>
      res
        .status(404)
        .json({ status: "not found", error: "Recurso no encontrado" });
    next();
  }*/
}

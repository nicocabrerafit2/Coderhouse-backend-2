import { userDAO, productDAO } from "../persistence/factory.js";
import userRepository from "./userRepository.js";
import productRepository from "./productRepository.js";

export const UserRepository = new userRepository(userDAO);
export const ProductRepository = new productRepository(productDAO);

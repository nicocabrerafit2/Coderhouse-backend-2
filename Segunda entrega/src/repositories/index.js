import { userDAO } from "../persistence/factory.js";
import userRepository from "./userRepository.js";

export const userService = new userRepository(userDAO);

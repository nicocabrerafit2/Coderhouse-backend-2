import { model, Schema } from "mongoose";

const userCollection = "user";

const userSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  apellido: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  rol: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    require: true,
  },
});

const userModel = model(userCollection, userSchema);

export { userModel };

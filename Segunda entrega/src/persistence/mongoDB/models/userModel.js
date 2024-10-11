import { model, Schema } from "mongoose";

const userCollection = "user";

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  last_name: {
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

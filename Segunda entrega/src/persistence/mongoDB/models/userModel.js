import { model, Schema } from "mongoose";

const userCollection = "users";

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

const userModelMongo = model(userCollection, userSchema);

export { userModelMongo };

import mongoose, { Schema, model } from "mongoose";
const cartCollection = "carts";
const cartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModelMongo",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productModelMongo",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
  status: {
    type: String,
    enum: ["active", "completed"], // Posibles valores para el estado del carrito
    default: "active",
  },
  ticket: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ticketModelMongo",
  },
});
const cartModelMongo = model(cartCollection, cartSchema);

export { cartModelMongo };

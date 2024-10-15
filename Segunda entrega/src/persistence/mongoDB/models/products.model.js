import { Schema, model } from "mongoose";
const productCollection = "product";

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  code: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: String,
    default: "user",
  },
  stock: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  thumbnails: {
    type: String,
    require: true,
  },
});

const productModelMongo = model(productCollection, productSchema);

export { productModelMongo };
/*
import mongoosePaginate from "mongoose-paginate-v2";
const productStructure = new Schema({
  title: String,
  description: String,
  code: String,
  price: Number,
  stock: Number,
  category: String,
  thumbnails: Array,
});
productStructure.plugin(mongoosePaginate);
const productDb = model("productDb", productStructure);

export { productDb };
*/

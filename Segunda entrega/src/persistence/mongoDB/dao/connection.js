import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_STRING, { dbName: process.env.USE_DB })
      .then(console.log("Base de datos conectada"));
  } catch (e) {
    console.log("Error al conectarse a la base de datos");
  }
};

export default connectionDB;

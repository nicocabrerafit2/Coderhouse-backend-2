import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://nicocabrera8:Y0BrFdDBQ23amtUR@backendcoderhouse1.nvbxjk0.mongodb.net/?retryWrites=true&w=majority&appName=BackendCoderhouse1",
        { dbName: "users" }
      )
      .then(console.log("BBDD conectada"));
  } catch (e) {
    console.log("Error al conectarse a la BBDD");
  }
};

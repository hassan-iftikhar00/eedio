import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    // Log the connection details after a successful connection
    console.log(
      `\n MONGODB CONNECTED!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERROR: ", error);
    process.exit(1);
  }
};

export default connectDB;

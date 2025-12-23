import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToMongoDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("errorconnecting mongo db ",error.message);
    }
};

export default connectToMongoDB;

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';   
import connectToMongoDB from './db/connectToMongoDb.js';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";


const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();


app.use(express.json());//this will allow to extract fields in authcontroller from req.body
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from "cookie-parser"
import path from "path";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
// .then(() => console.log("MongoDB Connected",process.env.MONGODB_CONNECTION_STRING))


//YvlQKTctoYeYmhzS
const app=express();

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
}))

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

app.listen(7000,()=>{
    console.log("Server is running on port 7000");
})
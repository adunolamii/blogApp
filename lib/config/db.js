import mongoose from "mongoose";
import dotenv from "dotenv"

 export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://blogapp:blogapp@blogapp.ox50j.mongodb.net/blogapp?retryWrites=true&w=majority&appName=blogapp")
    console.log("connectedDB");
    
}

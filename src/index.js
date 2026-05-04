import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { dbName } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();

// import express from 'express';

// const app = express();

// (
//    async () => {
//      try {
//        await mongoose.connect(`${process.env.MongoDB_URI}/${dbName}`)
        
//        app.on("error", (error)=>{
//          console.log("Error is:", error)
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening in port: ${process.env.PORT}`)
//        })
//      } 
//      catch (error) {
//         console.log("Error:",error)
//         throw error
//      }
//     }
// )() 
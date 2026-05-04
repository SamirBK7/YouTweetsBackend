import mongoose from "mongoose";
import { dbName } from "../constants.js";


const connectDB = async () =>{
    try {
        const conn_var= await mongoose.connect(`${process.env.MongoDB_URI}/${dbName}`)
        console.log(`Mongo db connected !!! DB host is: ${conn_var.connection.host}`)
    } catch (error) {
        console.log("MongoDB error is :",error);
        process.exit(1)
    } 
}

export default connectDB;
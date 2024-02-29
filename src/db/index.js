import DB_NAME from "../constant.js";
import mongoose from "mongoose";

const dbconnect = async () =>
{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`host name ${connectionInstance.connection.host}`)
    } 
    catch (error) {
        console.error("database connection error",error)
    }
}
export default dbconnect
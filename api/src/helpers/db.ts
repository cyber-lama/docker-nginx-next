import mongoose from "mongoose";
import {db} from "../configuration";


export const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log("success connect to db")
    } catch (e) {
        throw new Error(e)
    }
}
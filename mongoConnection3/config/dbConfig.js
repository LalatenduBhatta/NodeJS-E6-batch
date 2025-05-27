import mongoose from "mongoose";

async function connectDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydb3")
        console.log("db connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDb;
import mongoose from "mongoose"

let mongoURL = "mongodb://127.0.0.1:27017/db2"

async function dbConnect() {
    try {
        //db connection 
        await mongoose.connect(mongoURL)
        console.log("db connected")
    } catch (error) {
        console.log(error.message)
    }
}

export default dbConnect
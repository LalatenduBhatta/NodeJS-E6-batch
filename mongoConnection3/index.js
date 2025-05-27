import express from "express"
import connectDb from "./config/dbConfig.js"
import userRouter from "./routes/userRoutes.js"


const app = express()

//db connection
connectDb()

//routes
app.use("/user", userRouter)


app.listen(8000, () => {
    console.log("server is running in port 8000")
})
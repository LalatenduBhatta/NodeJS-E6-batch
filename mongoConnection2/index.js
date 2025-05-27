import express from "express"
import dbConnect from "./config/dbConfig.js"
import userRouter from "./routes/userRoutes.js"
const app = express()
//connect db
dbConnect()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes / apis
app.get("/", (req, res) => res.send({ message: "Server at work" }))

app.use("/user", userRouter) //user routes

//listen
app.listen(7000, () => {
    console.log("server is running in port 7000")
})
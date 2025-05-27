import express from "express"
import userModel from "../model/userModel.js"

const userRouter = express.Router()

// user router apis
userRouter.get("/", (req, res) => {
    res.send("The User Router is Working")
})

//create user
userRouter.post("/add", async (req, res) => {
    try {
        const data = req.body
        await userModel.insertOne(data)
        res.status(201).send({ message: "User data stored" })
    } catch (error) {
        return res.status(500).send({ error: "An error occured", message: error.message })
    }
})




export default userRouter
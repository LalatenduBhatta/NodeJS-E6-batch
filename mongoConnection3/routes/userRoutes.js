import express from "express"

const userRouter = express.Router()

// user apis
userRouter.get("/all", (req, res) => {
    //get all the users from db
})



export default userRouter
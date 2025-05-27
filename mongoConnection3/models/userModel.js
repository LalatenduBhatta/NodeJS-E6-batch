import mongoose from "mongoose";
import userSchema from "../schemas/userSchema.js";

const userModel = mongoose.model("Users", userSchema)



export default userModel;
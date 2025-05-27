import userSchema from "../schema/userSchema.js";

import mongoose from "mongoose";

const userModel = mongoose.model("users", userSchema)


export default userModel;
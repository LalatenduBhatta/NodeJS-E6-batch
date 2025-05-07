const express = require("express")

const app = express()
//middlewares
//! Application level middleware
app.get("/", (req, res, next) => {
    console.log("middlware 1")
    next()
}, (req, res, next) => {
    console.log("middlware 2")
    throw new Error("error occured")
    res.write("HEY THERE")
    next()
}, (req, res) => {
    console.log("middleware 3")
    res.end(" HELLO")
})

//! Router Level Middleware
// //router declaration
// const userRouter = express.Router()
// const productRouter = express.Router()
// // router middleware 
// app.use("/user", userRouter)
// app.use("/product", productRouter)
// //apis
// userRouter.get("/login", (req, res) => { // http://127.0.0.4:4444/user/login
//     console.log("user login route")
// })
// productRouter.get("/add", (req, res) => { //http://127.0.0.4:4444/product/add
//     console.log("add product route")
// })

//!Error Handeling middleware
// app.use((error, req, res, next) => {
//     console.log("error===", error.message)
// })

//!Built-in Middlewares
app.use(express.static("./folderpath")) //static folder to serve static files
app.use(express.json()) //parse the incoming json data in request body
app.use(express.urlencoded({ extended: true })) //parse the incoming url data in request

//!Third Party middlewares
// app.use(morgan("dev"))//api request logger
//app.use(cookie-parser()) //parse cookie data
//app.use(cors()) //resolve the cross origin resource sharing policy
// app.use(multer()) //handels form-data(files) in request body

app.listen(4444, "127.0.0.4", () => {
    console.log("server running in http://127.0.0.4:4444")
})
const express = require("express")
const fs = require("fs")
const server = express()

//static folder middleware
server.use(express.static("./public"))

//APIs
server.get("/", (req, res) => {
    res.end(fs.readFileSync("./public/pages/Home.html"))
})




server.listen(4040, () => {
    console.log("server started at http://localhost:4040")
})
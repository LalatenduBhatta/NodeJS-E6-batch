const express = require("express")
const path = require("path")

const app = express()

//middlewares
app.use(express.static("./public")) //static folder middleware
app.use(express.json()) //json parser middleware


// routes (or) apis
app.get("/", (req, res) => {
    // res.sendFile("C:/Users/HP/OneDrive/Desktop/Node A6/expressServer2/public/pages/index.html") //absolute path
    res.sendFile(path.join(__dirname, "public", "pages", "index.html")) //dynamic path
})

app.get("/getdata", (req, res) => {
    let user = { name: "user", age: 10 }
    // res.write(JSON.stringify(user))
    // res.end()
    res.send(user)
})

app.post("/postdata", (req, res) => {
    console.log(req.body)
    res.send({ message: "data recieved" })
})


app.listen(7000, "localhost", () => {
    console.log("server running at http://localhost:7000")
})
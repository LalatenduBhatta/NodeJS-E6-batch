const express = require("express")

const app = express()

//middlewares
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send("Server is working")
})

app.get("/user", (req, res) => {
    res.send({ name: "Virat", age: 36, address: "Delhi" })
})

app.post("/register", (req, res) => {
    console.log(req.body);
    res.status(201).send({ message: "Data Stored" })
})


app.listen(5000, () => {
    console.log("server running in port 5000")
})
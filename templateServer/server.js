const express = require("express")
// const ejs = require("ejs")


const app = express()

//define template engine
app.set("view engine", "ejs")
app.set("views", "./pages") //folder declaration

//routes
app.get("/", (req, res) => {
    res.render("Home", { name: "Dhoni", age: 41, address: "Ranchi" })
})
app.get("/about", (req, res) => {
    res.render("About")
})

app.listen(2020, () => {
    console.log("server started at http://localhost:2020")
})
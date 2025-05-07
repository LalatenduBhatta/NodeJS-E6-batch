const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const { url, method } = req
    if (url == "/" && method == "GET") {
        const data = fs.readFileSync("./pages/Home.html")
        res.end(data)
    }
    else if (url == "/about" && method == "GET") {
        const data = fs.readFileSync("./pages/About.html")
        res.end(data)
    }
    else if (url == "/products" && method == "GET") {
        const data = fs.readFileSync("./pages/Products.html")
        res.end(data)
    }
    else if (url == "/Navbar.css" && method == "GET") {
        const data = fs.readFileSync("./css/Navbar.css")
        res.end(data)
    }
    else if (url == "/wallpaper" && method == "GET") {
        const data = fs.readFileSync("./assets/wallpaper.jpg")
        res.end(data)
    }
    else if (url == "/getdata" && method == "GET") {
        let fruits = ["apple", "grapes", "mango", "kiwi"]
        res.end(JSON.stringify(fruits))
    }
    else if (url == "/senddata" && method == "POST") {
        //get the data from client's request
        req.on("data", (data) => {
            const animals = JSON.parse(data.toString())
            console.log(animals)
            res.end(JSON.stringify({ message: "Data Recieved" }))
        })
    }

})


server.listen(8000, "localhost", () => {
    console.log("server is running in http://localhost:8000")
})
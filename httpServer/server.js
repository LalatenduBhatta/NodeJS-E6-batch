const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    if (req.url == "/" && req.method == "GET") {
        const htmlData = fs.readFileSync("./pages/Home.html")
        res.write(htmlData)
        res.end()
    }
    else if (req.url == "/about" && req.method == "GET") {
        const htmlData = fs.readFileSync("./pages/About.html")
        res.write(htmlData)
        res.end()
    }
    else if (req.url == "/login" && req.method == "GET") {
        const htmlData = fs.readFileSync("./pages/Login.html")
        res.write(htmlData)
        res.end()
    }
    else if (req.url == "/Home.css" && req.method == "GET") {
        const cssData = fs.readFileSync("./css/Home.css")
        res.write(cssData)
        res.end()
    }
})


server.listen(8000, "127.0.0.8", () => {
    console.log("server is running ih http://127.0.0.8:8000")
})
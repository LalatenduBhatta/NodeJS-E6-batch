const http = require("http")

const server = http.createServer((req, res) => {
    //server logic comes here
    // console.log("hi")
    // console.log(req.method)
    // console.log(req.url)
    if (req.method == "GET" && req.url == "/") {
        res.write("<h1>Hello world</h1>")
        res.end()
        // console.log("home page req")
    }
    else if (req.method == "GET" && req.url == "/login") {
        // console.log("login page req")
        res.end("<h1>This is <mark>login</mark> page</h1>")
    }
    else if (req.method == "GET" && req.url == "/student") {
        res.end(JSON.stringify({ name: "Hari", age: 20 }))
    }
    else {
        res.write("<h1>ERROR 404!!!! Page Not Found</h1>")
        res.end()
    }
})


server.listen(4000, "127.0.0.7", () => {
    console.log("server started")
})
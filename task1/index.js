const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const { url, method } = req
    if (method == "GET") {
        if (url == "/") {
            res.end("Home page")
        }
        if (url == "/addproduct") {
            res.end(fs.readFileSync("./pages/AddProduct.html"))
        }
        else if (url == "/products") {
            res.end(fs.readFileSync("./pages/ShowProducts.html"))
        }
    }
    else if (method == "POST") {
        if (url == "/add") {
            req.on("data", (data) => {
                let product = JSON.parse(data.toString())
                // console.log(product)
                let allProducts = fs.readFileSync("./data/products.json", "utf-8") ?
                    JSON.parse(fs.readFileSync("./data/products.json", "utf-8")) :
                    []
                //check the product already added or not
                let isAdded = allProducts.find(ele => ele.name == product.name)
                if (isAdded) {
                    //update the quantity
                    allProducts.forEach(ele => {
                        if (ele.name == product.name) {
                            ele.quantity = `${Number(ele.quantity) + Number(product.quantity)}`
                        }
                    })
                } else {
                    //push the product to all products array
                    allProducts.push(product)
                }
                //write the products.json
                fs.writeFileSync("./data/products.json", JSON.stringify(allProducts))
                res.end(JSON.stringify({ message: "Product Added" }))
            })
        }
    }
})

server.listen(4040, "127.0.0.4", () => {
    console.log("server is running in http://127.0.0.4:4040")
})
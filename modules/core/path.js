// import path from "path"

const path = require("path")

// It gets the informations from a given path strings (or)
// used to merge path dynamically

const myPath = "/parentFolder/childFolder/myFile.html"

console.log(path.dirname(myPath)) //directory names
console.log(path.basename(myPath)) //file name
console.log(path.extname(myPath))  // extention name
console.log(path.sep) // system path separator

const dynamicPath = path.join("node", "modules", "path.js") //join paths
console.log(dynamicPath)
import fs from "fs";

//!create (or) write file
//async
// fs.writeFile("./A.txt", "HELLO WORLD", (error) => {
//     if (error) console.log(error)
//     else console.log("file created")
// })

//sync
// try {
//     fs.writeFileSync("./B.txt", "Welcome to Node js")
//     console.log("file created")
// } catch (error) {
//     console.log(error)
// }

//!read files
// //async
// fs.readFile("./A.txt", "utf-8", (error, data) => {
//     if (error) console.log(error)
//     else console.log(data)
// })
// //sync
// const data = fs.readFileSync("./B.txt")
// console.log(data.toString())

//!Copy File (value copy)
// //async
// fs.copyFile("./A.txt", "myFile.txt", (error) => {
//     if (error) console.log(error)
//     else console.log("file copied")
// })

// //! Link file (reference copy)
// //async
// fs.link("./A.txt", "myLinkFile.txt", (error) => {
//     if (error) console.log(error)
//     else console.log("file linked")
// })

// //! Rename File
// //async
// fs.rename("./A.txt", "./Virat.txt", (error) => {
//     if (error) console.log(error)
//     else console.log("file renamed")
// })

// //!Create Folder
// fs.mkdir("./newFolder2", (err) => {
//     if (err) console.log(err)
//     else console.log("folder created")
// })
//!Delete Folder
fs.rmdir("./newFolder2", (err) => {
    if (err) console.log(err)
    else console.log("folder deleted")
})
const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

//middlewares
app.use(express.static("./public")) //static file serving
app.use(express.json()) //json data parser

//apis
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "index.html"))
})

//read tasks
app.get("/alltasks", (req, res) => {
    let allTasks = JSON.parse(fs.readFileSync("./db/tasks.json"))
    res.send(allTasks)
})

//create tasks
app.post("/addtask", (req, res) => {
    const { taskTitle, taskDesc, taskDate } = req.body
    if (taskTitle && taskDesc && taskDate) {
        //create a random id
        const id = Math.trunc(Math.random() * 100000)
        let task = { taskTitle, taskDate, taskDesc, id }
        //add the task in json file
        let allTasks = JSON.parse(fs.readFileSync("./db/tasks.json"))
        allTasks.push(task)
        fs.writeFileSync("./db/tasks.json", JSON.stringify(allTasks))
        res.status(201).send({ message: "Task created" })
    } else {
        res.status(400).send({ error: "Provide all the fileds" })
    }
})

app.delete("/deletetask", (req, res) => {
    let { id } = req.body
    if (id) {
        let allTasks = JSON.parse(fs.readFileSync("./db/tasks.json"))
        let remainingTasks = allTasks.filter(task => task.id !== id)
        //update the json file
        fs.writeFileSync("./db/tasks.json", JSON.stringify(remainingTasks))
        res.status(200).send(remainingTasks)
    } else {
        res.status(400).send({ error: "Provide the id" })
    }
})

app.listen(4050, () => {
    console.log("server running in http://localhost:4050")
})
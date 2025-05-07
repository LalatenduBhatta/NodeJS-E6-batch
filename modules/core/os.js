// import OS from "os"

const OS = require("os")

//it provides the information about the Operating System of the server computer

console.log(OS.totalmem()) //total ram memory
console.log(OS.freemem()) //free ram memory
console.log(OS.arch()) //windows architecture
console.log(OS.version()) //version of os
console.log(OS.hostname()) //name of the system host
console.log(OS.cpus().length) //total numbers of cpu cores
console.log(OS.platform()) //windows platform
console.log(OS.type()) //os type
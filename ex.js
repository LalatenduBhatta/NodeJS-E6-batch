let interval1 = setInterval(() => {
    console.log("1")
}, 2000)
let interval2 = setInterval(() => {
    console.log("2")
}, 1500)

setTimeout(() => {
    clearInterval(interval1)
    clearInterval(interval2)
}, 10000)
const http = require("http");


const server = http.createServer((req,res)=>{

    console.log(req)
    console.log("Ravi prasad keshri")
})

server.listen(4000);
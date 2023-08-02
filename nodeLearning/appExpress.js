// const http = require("http");

const express = require("express")

const app = express()

app.use((req, res, next)=>{
    console.log("In first")
    next();
})

app.use((req, res, next)=>{
    console.log("2nd")
    res.send("<h2>In the Epress Project</h2>");
})

app.listen(4000);
// const server = http.createServer(app)

// server.listen(3000);


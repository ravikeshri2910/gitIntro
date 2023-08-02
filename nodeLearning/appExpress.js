// const http = require("http");

const bodyParser = require("body-parser")

const express = require("express")

const app = express()

// app.use((req, res, next)=>{
//     console.log("In first")
//     next();
// })

app.use(bodyParser.urlencoded())

app.use("/app-product",(req, res, next)=>{
    console.log("app-product")
    res.send('<body><form action="/product" method="POST"><label>Title:-</label><input type="text" name="title"><br><label>Size:-</label><input type="number" name="size"><button type="submit">send</button></form></body>');
    res.send("<h2>App product page</h2>");
})
app.use("/product",(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
    // res.send("<h2>In the Epress Project</h2>");
})
app.use("/",(req, res, next)=>{
    console.log("2nd")
    res.send("<h2>In the Epress Project</h2>");
})

app.listen(4000);
// const server = http.createServer(app)

// server.listen(3000);



const express = require("express")
const bodyParser = require("body-parser")

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded())

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req, res, next) =>{
    res.status(404).send('<h2>Page not found</h2>')
})

app.listen(4000);
// const server = http.createServer(app)
// server.listen(3000);

// app.use((req, res, next)=>{
//     console.log("In first")
//     next();
// })
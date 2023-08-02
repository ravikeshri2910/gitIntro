const express = require('express');

const route = express.Router();

// /admin/app-product => GET
route.get("/app-product",(req, res, next)=>{
    console.log("app-product")
    res.status(202).send('<body><form action="/admin/product" method="POST"><label>Title:-</label><input type="text" name="title"><br><label>Size:-</label><input type="number" name="size"><button type="submit">send</button></form></body>');
})

// /admin/app-product => POST
route.post("/product",(req, res, next)=>{
    console.log(req.body)
    res.redirect('/shop')

})

module.exports = route;
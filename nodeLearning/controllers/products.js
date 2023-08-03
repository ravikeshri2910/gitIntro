const Product = require('../models/product')

const path = require('path');

// add product page
exports.appProduct = (req, res, next)=>{
    console.log("app-product")
   
    res.status(202).sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'add-product.html'));
}

// after submiting the product from product page
exports.postAppProduct = (req, res, next)=>{
    const product = new Product(req.body.title)
    product.save()
    // console.log(req.body.title)
    res.redirect('/shop')
}

// shop
exports.getProduct = (req, res, next)=>{
    const product = Product.fetchAll();
    console.log(product)
    res.sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'shop.html'))
    
}


exports.contactus = (req, res)=>{
    res.sendFile(path.join(__dirname,'..','viewsAppExpress','contact.html'))
}

exports.succes = (req, res )=>{
    res.sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'succes.html'))
}

exports.invalid = (req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname,'..', 'viewsAppExpress', 'invalidPage.html'))
}

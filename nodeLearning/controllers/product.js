const path = require('path');

exports.appProduct = (req, res, next)=>{
    console.log("app-product")
    res.status(202).sendFile(path.join(__dirname, '..', 'viewsAppExpress', 'add-product.html'));
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

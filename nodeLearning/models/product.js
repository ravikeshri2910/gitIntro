const fs = require('fs');
const path = require('path');

// const products = []

module.exports = class Product {

    constructor(t){
        this.title = t;
    }

    save(){
        // products.push(this)
        const p = path.join(__dirname , '..', 'data', 'products.json')

        fs.readFile(p, (err , fileContent)=>{
            let products = []
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err)
            })
        });
    }

    static fetchAll(){
        const p = path.join(__dirname , '..', 'data', 'products.json');

        return fs.readFile(p,(err, fileContent)=>{
            if(err){
                console.log([])
                return
            }
          console.log(JSON.parse(fileContent))
          ret
        })
        
    }
}
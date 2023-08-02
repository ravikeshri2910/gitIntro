const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/login", (req, res, next) => {
    res.status(202).send(`
    <body>
    <form onSubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/logedin" method="POST">
    <label>User:-</label>
    <input id="username" type="text" name="title">
    <input id="text" type="hidden" name="text">
    <br>
    <button type="submit">Log In</button>
    </form>
    </body>`);

})






app.post("/logedin", (req, res) => {
    
    console.log(req.body)
    fs.writeFile("chatText.txt",`${req.body.title}:${req.body.text}` ,{flag : 'a'}, ()=>{
        res.redirect("/")

    })
})

app.get("/", (req, res) => {

    fs.readFile("chatText.txt",(err, data)=>{
        if(err){
            data = "No chat found"
        }
        res.status(202).send(`
        <body>
        <h2>${data}</h2>
        <form action="/logedin" method="POST">
        <input id="username" type="hidden" name="title">
        <label>Chat:-</label>
        <input id="text" type="text" name="text">
        <br>
        <button type="submit">Enter</button>
        </form>
        </body>`);
    })
    
   
   




})



app.listen(3000);




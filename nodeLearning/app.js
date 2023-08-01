const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    // console.log(req)
    console.log("Ravi prasad keshri")
    console.log(req.url)

    if (req.url == '/home') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h2>Welcome Home</h2></body>');
        res.write('</html>');
        res.end();
        // process.exit()
    }
    else if (req.url == '/about') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h2>Welcome To About Page</h2></body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url == '/node') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h2>Welcome To my Node Js Project</h2></body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url === '/') {
        // let file = "Ram"

        fs.readFile('newText.txt', { encoding: "utf-8" }, (err, data) => {
            if(err){
                console.log(err)
            }

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Node</title></head>');
            res.write(`<body><h2>${data}</h2></body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');

            res.write('</html>');
            res.end();
        })
    }

    else if (req.url === '/message' && req.method === 'POST') {
        console.log(req.method)
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on("end", () => {
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody);
            const msg = parseBody.split("=")[1]

            // fs.writeFileSync('newText.txt', msg);
            fs.writeFile('newText.txt', msg, () => {

                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    }
    else {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>None</title></head>');
        res.write('<body><h2>Invalid URL</h2></body>');
        res.write('</html>');
        res.end();
    }
    // process.exit()
})

server.listen(4000);
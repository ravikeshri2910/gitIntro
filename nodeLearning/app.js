const http = require("http");


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
        process.exit()
    }
    else if (req.url == '/about') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h2>Welcome To About Page</h2></body>');
        res.write('</html>');
        res.end();
    }
    else if (req.url == '/node') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h2>Welcome To my Node Js Project</h2></body>');
        res.write('</html>');
        res.end();
    }
    else{

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h2>Invalid URL</h2></body>');
        res.write('</html>');
        res.end();
    }
    // process.exit()
})

server.listen(4000);
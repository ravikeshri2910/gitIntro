const http = require("http");
// const fs = require("fs");

const route = require("./route")

console.log(route.text)


const server = http.createServer(route.hand)

server.listen(4000);


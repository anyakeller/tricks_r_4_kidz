// Basic Node Page Format

//"NODES" or modules for node
const http = require("http"); //for localhost
const fs = require("fs"); //for reading local files

//setup localhost
const hostname = "127.0.0.1";
const port = 3000;

//create the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile("index.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
});

//sever check
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

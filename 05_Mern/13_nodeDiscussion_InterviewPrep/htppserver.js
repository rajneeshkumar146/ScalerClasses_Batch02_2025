const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    // console.log("headers", req.headers, "url", req.url, "method", req.method);
    // console.log("request event");

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types
    if (req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain",
        });
    } else if (req.method === "POST") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
    }

    res.write("Hello World!!!");
    res.end();
});


server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
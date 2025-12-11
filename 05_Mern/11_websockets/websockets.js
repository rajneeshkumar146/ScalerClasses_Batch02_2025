const express = require("express");
const http = require("http");
const { Server } = require('socket.io');


const app = express();
app.use(express.static("public"));
const server = http.createServer(app);
// this io is responsible for handling all the socket connections
const io = new Server(server);

io.on('connection', (socket) => {
    console.log("A user connected with id: ", socket.id);

    // setInterval(() => {
    //     socket.emit("message", "message from server - " + socket.id + " at " + new Date())
    // }, 2000);

    socket.on("message", (data) => {
        socket.broadcast.emit("broadcast", data);
    });


    // Listen for disconnection.
    socket.on("disconnect", () => {
        console.log("user disconnected " + socket.id);
    })
});


app.get('/', (req, res) => {
    res.send("hello world");
});

server.listen(3000, () => console.log("listening at 3000: http://localhost:3000/"));
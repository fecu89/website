import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req,res) => res.render("home"))
app.get("/*", (req,res) => res.redirect("/"))


const handleListen = () => console.log("Listening on http://localhost:3000")
// app.listen(3000, handleListen)

const server = http.createServer(app);
const wss = new WebSocket.Server({server});

// 에로우 펑션을 변경하면 아래와 같음
// 1. 원래 함수
// function handleConnection(socket){
//     console.log(socket)
// }
// wss.on("connection", handleConnection)

// 2. 에로우 펑션을 활용한 함수
wss.on("connection", (socket) => {
    // console.log(socket);
    console.log("Connected to Browser")
    socket.send("hello!")
});

server.listen(3000, handleListen)
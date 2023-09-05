// alert("hi!");

// const socket = new WebSocket("http://localhost:3000")
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected to Server");
});

socket.addEventListener("message", (message) => {
    console.log(`Just got this ${message.data} frome the server`);
});

socket.addEventListener("close", () => {
    console.log("Dissconnected from Server");
});

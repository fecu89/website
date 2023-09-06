// alert("hi!");

// const socket = new WebSocket("http://localhost:3000")

const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

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
 
// setTimeout(() => {
//     socket.send("hello from browser!");
// }, 5000);

function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(input.value);
    input.value = "";
};

messageForm.addEventListener("submit", handleSubmit)
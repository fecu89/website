const express = require("express");
const app = express();

app.listen(8080, () => console.log("listen on 8008"));

app.get("/pet", (_, res) => {
    res.send("펫 용품 쇼핑 사이트 입니다.");
});
app.get("/beaury", (_, res) => {
    res.send("뷰티용품 쇼핑 사이트 입니다.");
});
app.get("/", (_, res) => {
    res.sendFile(__dirname + "/index.html");
});


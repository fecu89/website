const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const color = document.getElementById("color");
const ctx = canvas.getContext("2d");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
);
canvas.width = 300;
canvas.height = 300;

ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    };
    ctx.moveTo(event.offsetX, event.offsetY);
};

function startPainting(event) {
    console.log("mouse down");
    isPainting = true;
};
function cancelPainting(event) {
    console.log("mouse up");
    isPainting = false;
    ctx.beginPath();
};
function onLineWidthChgange(event){
    ctx.lineWidth = event.target.value;
};
function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
};

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
};
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
lineWidth.addEventListener("change", onLineWidthChgange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => {
    color.addEventListener("click", onColorClick)
});
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;

ctx.lineWidth = 2;
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
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

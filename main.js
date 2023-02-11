var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var colour = "red";
var radius = 20;
var width = 100;

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    colour = document.getElementById("colour_input").value;
    radius = document.getElementById("radius_input").value;
    width = document.getElementById("width_input").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown") {
        console.log("The current position of x and y is ");
        console.log("x = "+currentX+"y = "+currentY);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.arc(currentX, currentY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

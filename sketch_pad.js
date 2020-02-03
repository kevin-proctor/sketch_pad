var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10;
var dragging = false;

canvas.width = 500;
canvas.height = 500;

context.lineWidth = radius * 2;

var paint = function(e) {
    if (dragging) {
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);
    }
}

var engage = function(e){
    dragging = true;
    paint(e);
}

var disengage = function(){
    dragging = false;
    context.beginPath();
}

//add color selector palette

//add custom color creator

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', paint);
canvas.addEventListener('mouseup', disengage);
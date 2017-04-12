function initializeCanvas() {
    RenderManager.canvas.width = window.innerWidth;
    RenderManager.canvas.height = window.innerHeight;
}

function draw(){
    var ctx = RenderManager.canvas.getContext('2d');
    ctx.clearRect(0, 0, RenderManager.canvas.width, RenderManager.canvas.height); // clears the canvas before before redrawing
    drawSnake();
}


// VARIABLES FOR SNAKE
// PROBABLY ENCAPSULATE THIS AND REFACTOR
var snakeWidth = 10;
var snakeHeight = 10;
var x = 10;
var y = 10;
var dx = 10;
var dy = 10;
var dir = {
    LEFT: 0,
    UP: 1,
    RIGHT: 2,
    DOWN: 3
};
var snakeDir = dir.RIGHT; // initial direction

function drawSnake(){
    switch(snakeDir){
        case dir.LEFT:
            x -= dx;
            break;
        case dir.RIGHT:
            x += dx;
            break;
        case dir.UP:
            y -= dy;
            break;
        case dir.DOWN:
            y += dy;
            break;
    }
    var ctx = RenderManager.canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(x,y,snakeWidth,snakeHeight);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
}

// keyboard listener
function keyDownHandler(e){
    switch (e.key) {
        case "w":
        case "ArrowUp":
            snakeDir = dir.UP;
            break;
        case "a":
        case "ArrowLeft":
            snakeDir = dir.LEFT;
            break;
        case "s":
        case "ArrowDown":
            snakeDir = dir.DOWN;
            break;
        case "d":
        case "ArrowRight":
            snakeDir = dir.RIGHT;
            break;
    }
}
document.addEventListener("keydown", keyDownHandler, false);

initializeCanvas();
setInterval(draw, 250);

function initializeCanvas() {
    RenderManager.canvas.width = window.innerWidth - 5;
    RenderManager.canvas.height = window.innerHeight - 5;

// Direction is one of:
// - "LEFT"
// - "RIGHT"
// - "UP"
// - "DOWN"
// represents the direction of snake's head
// TODO i think having using adding an event listener is better (look below)
    RenderManager.canvas.onkeydown = function (event) {
        switch (event.key) {
            case "w":
            case "ArrowUp":
                FieldManager.move("UP");
                break;
            case "a":
            case "ArrowLeft":
                FieldManager.move("LEFT");
                break;
            case "s":
            case "ArrowDown":
                FieldManager.move("DOWN");
                break;
            case "d":
            case "ArrowRight":
                FieldManager.move("RIGHT");
                break;
        }
    };
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
    if(e.keyCode == 65 || e.keyCode == 37){ // a or left arrow
        snakeDir = dir.LEFT;
    }
    else if(e.keyCode == 83 || e.keyCode == 40){ // s or down arrow
        snakeDir = dir.DOWN;
    }
    else if(e.keyCode == 87 || e.keyCode == 38){ // w or up arrow
         snakeDir = dir.UP;
    }
    else if(e.keyCode == 68 || e.keyCode == 39) { // d or right arrow
        snakeDir = dir.RIGHT;
    }

}
document.addEventListener("keydown", keyDownHandler, false);

initializeCanvas();
setInterval(draw, 250);

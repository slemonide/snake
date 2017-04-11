HEAD_START = {"x" : 1, "y" : 1};
TAIL_START = [];
//var snake = {"head" : HEAD_START, "tail" : TAIL_START};

var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

var ctx = canvas.getContext("2d");
ctx.arc(50,
        50,
        20,0,Math.PI*2);
ctx.fillStyle = "green";
ctx.fill();

console.log("starting...");

canvas.onkeydown = function (event) {
    switch (event.key) {
        case "w":
        case "ArrowUp":
            move("UP");
            break;
        case "a":
        case "ArrowLeft":
            move("LEFT");
            break;
        case "s":
        case "ArrowDown":
            move("DOWN");
            break;
        case "d":
        case "ArrowRight":
            move("RIGHT");
            break;
    }
};

// Direction is one of:
// - "LEFT"
// - "RIGHT"
// - "UP"
// - "DOWN"
// represents the direction of snake's head

// Direction -> Void
// moves the snakes head in the given direction
function move(direction) {
    console.log(direction); // stub
}

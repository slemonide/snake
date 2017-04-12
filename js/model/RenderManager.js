var RenderManager = {
    canvas : document.querySelector('canvas'),
    context : document.querySelector('canvas').getContext("2d"),

    head : document.getElementById("head"),
    body : document.getElementById("body"),
    tail : document.getElementById("tail"),

    drawSnake: function () {
        this.context.drawImage(this.body, 10, 10);
    },
    // Observer pattern
    update : function () {
        this.drawSnake();
    }
};

function initializeCanvas() {
    RenderManager.canvas.width = window.innerWidth - 5;
    RenderManager.canvas.height = window.innerHeight - 5;

// Direction is one of:
// - "LEFT"
// - "RIGHT"
// - "UP"
// - "DOWN"
// represents the direction of snake's head

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

initializeCanvas();

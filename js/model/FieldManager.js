/**
 * Singleton pattern.
 *
 * Manages the whole game field
 *
 * @type {{FIELD_WIDTH: number, FIELD_HEIGHT: number, center: Node}}
 */
var FieldManager = {
    // ---- VARIABLES ----
    center : new Vector2(0, 0),
    // Direction the snake is looking at
    direction : "UP",

    // ----  METHODS ----
    // Direction -> Void
    // moves the snakes head in the given direction
    move: function (direction) {
        switch (direction) {
            case "UP":
                this.center = this.center.get(0, -1);
                this.direction = "UP";
                break;
            case "DOWN":
                this.center = this.center.get(0, 1);
                this.direction = "DOWN";
                break;
            case "LEFT":
                this.center = this.center.get(-1, 0);
                this.direction = "LEFT";
                break;
            case "RIGHT":
                this.center = this.center.get(1, 0);
                this.direction = "RIGHT";
                break;
        }

        RenderManager.update();
        console.log(direction); // stub
        console.log(this.center);
    }
};

/**
 * Singleton pattern.
 *
 * Manages the whole game field
 *
 * @type {{FIELD_WIDTH: number, FIELD_HEIGHT: number, center: Node}}
 */
var FieldManager = {
    // ---- CONSTANTS ----
    FIELD_WIDTH : 10,
    FIELD_HEIGHT : 10,

    // ---- VARIABLES ----
    //center : new Node(this.FIELD_WIDTH, this.FIELD_HEIGHT),

    // ----  METHODS ----
    // Direction -> Void
    // moves the snakes head in the given direction
    move: function (direction) {
        console.log(direction); // stub
    }
};

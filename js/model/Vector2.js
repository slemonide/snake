/**
 * Creates a node at the given position
 * @param x
 * @param y
 * @constructor
 */
function Vector2 (x, y) {
    this.x = x;
    this.y = y;

    this.get = function (x, y) {
        return new Vector2(this.x + x, this.y + y);
    }
}

/**
 * Creates a node connected to itself from all sides
 * @constructor
 */
function Node () {
    this.left = this;
    this.right = this;
    this.down = this;
    this.left = this;

    /**
     * connects given node at the specified direction relative to this node
     * @param direction
     * @param node
     */
    this.connectAt = function (direction, node) {
        this[direction] = node;
    }
}

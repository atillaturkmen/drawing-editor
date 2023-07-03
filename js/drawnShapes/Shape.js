export class Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        // The distance threshold is used to determine if the mouse is
        // close enough to the shape to select it.
        // It is calculated proportional to the square root of size of the shape.
        // Threshold was becoming too big for large shapes when it was directly proportional to size.
        this.distanceThreshold = Math.sqrt(size) * 6;
    }

    isSelected(x, y) {
        throw new Error('Abstract method isSelected has not been implemented.');
    }

    moveShape(deltaX, deltaY) {
        throw new Error('Abstract method moveShape has not been implemented.');
    }

    drawShape(context) {
        context.strokeStyle = this.color;
        context.fillStyle = this.color;
        context.lineWidth = this.size;
        context.beginPath();
    }
}

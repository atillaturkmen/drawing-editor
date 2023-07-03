export class Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        // The distance threshold is used to determine if the mouse is
        // close enough to the shape to select it.
        this.distanceThreshold = 10 + this.size / 2;
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

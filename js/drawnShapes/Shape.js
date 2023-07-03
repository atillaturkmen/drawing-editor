export class Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
        this.distanceThreshold = 10;
    }

    isSelected(x, y) {
        throw new Error('Abstract method isSelected has not been implemented.');
    }

    moveShape(deltaX, deltaY) {
        throw new Error('Abstract method moveShape has not been implemented.');
    }

    drawShape(context) {
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.beginPath();
    }
}

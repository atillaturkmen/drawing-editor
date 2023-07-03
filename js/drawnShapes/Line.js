import {Shape} from "./Shape.js";

export class Line extends Shape {
    constructor(color, size, startX, startY, endX, endY) {
        super(color, size);
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }

    isSelected(x, y) {
        // Formula for distance between a point and a line
        const numerator = Math.abs((this.endY - this.startY) * x - (this.endX - this.startX) * y + this.endX * this.startY - this.endY * this.startX);
        const denominator = Math.sqrt((this.endX - this.startX) ** 2 + (this.endY - this.startY) ** 2);
        const distance = numerator / denominator;
        return distance <= this.distanceThreshold;
    }

    moveShape(deltaX, deltaY) {
        this.startX += deltaX;
        this.startY += deltaY;
        this.endX += deltaX;
        this.endY += deltaY;
    }

    drawShape(context) {
        super.drawShape(context);
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.strokeStyle = this.color;
        context.lineWidth = this.size;
        context.stroke();
    }
}

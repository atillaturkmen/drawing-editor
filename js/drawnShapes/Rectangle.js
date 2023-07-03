import {Shape} from "./Shape.js";

export class Rectangle extends Shape {
    constructor(color, size, startX, startY, width, height, fill) {
        super(color, size);
        this.startX = startX;
        this.startY = startY;
        this.width = width;
        this.height = height;
        this.fill = fill;
    }

    isSelected(x, y) {
        return x + this.distanceThreshold >= this.startX && x <= this.startX + this.width + this.distanceThreshold &&
            y + this.distanceThreshold >= this.startY && y <= this.startY + this.height + this.distanceThreshold;
    }

    moveShape(deltaX, deltaY) {
        this.startX += deltaX;
        this.startY += deltaY;
    }

    drawShape(context) {
        super.drawShape(context);
        context.rect(this.startX, this.startY, this.width, this.height);
        if (this.fill) {
            context.fill();
        } else {
            context.stroke();
        }
    }
}

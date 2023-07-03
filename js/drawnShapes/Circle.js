import {Shape} from "./Shape.js";

export class Circle extends Shape {
    constructor(color, size, startX, startY, radius, fill) {
        super(color, size);
        this.startX = startX;
        this.startY = startY;
        this.radius = radius;
        this.fill = fill;
    }

    isSelected(x, y) {
        const distance = Math.sqrt((this.startX - x) ** 2 + (this.startY - y) ** 2);
        return distance <= this.radius;
    }

    moveShape(deltaX, deltaY) {
        this.startX += deltaX;
        this.startY += deltaY;
    }

    drawShape(context) {
        super.drawShape(context);
        context.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI);
        if (this.fill) {
            context.fill();
        } else {
            context.stroke();
        }
    }
}

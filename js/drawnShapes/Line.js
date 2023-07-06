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
        const x1 = this.startX;
        const y1 = this.startY;
        const x2 = this.endX;
        const y2 = this.endY;

        // Calculate the squared length of the line segment
        const segmentLengthSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2;

        // Calculate the parameterized position of the closest point on the line segment
        const t = Math.max(0, Math.min(1, ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / segmentLengthSquared));

        // Calculate the coordinates of the closest point on the line segment
        const closestX = x1 + t * (x2 - x1);
        const closestY = y1 + t * (y2 - y1);

        // Calculate the distance between the point and the closest point on the line segment
        const distance = Math.sqrt((x - closestX) ** 2 + (y - closestY) ** 2);

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

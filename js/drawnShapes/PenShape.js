import {Shape} from "./Shape.js";

export class PenShape extends Shape {
    constructor(color, size, path) {
        super(color, size);
        this.path = path;
    }

    isSelected(x, y) {
        for (const point of this.path) {
            if (Math.abs(x - point.x) <= this.distanceThreshold
                && Math.abs(y - point.y) <= this.distanceThreshold) {
                return true;
            }
        }
        return false;
    }

    moveShape(deltaX, deltaY) {
        for (const point of this.path) {
            point.x += deltaX;
            point.y += deltaY;
        }
    }

    drawShape(context) {
        super.drawShape(context);
        context.moveTo(this.path[0].x, this.path[0].y);
        for (const point of this.path) {
            context.lineTo(point.x, point.y);
        }
        context.stroke();
        context.closePath();
    }
}

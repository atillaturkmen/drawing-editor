import {DrawingTools} from "./DrawingTools.js";
import {Circle} from "../../drawnShapes/Circle.js";
import {DrawingManager} from "../../DrawingManager.js";

export class CircleDrawer extends DrawingTools {

    handleMouseMove = (e) => {
        this.context.putImageData(this.savedImageData, 0, 0);

        const {x, y} = this.getMousePos(e);
        this.endX = x;
        this.endY = y;

        this.radius = Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2));
        this.context.beginPath();
        this.context.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI);
        if (this.fill) {
            this.context.fill();
        } else {
            this.context.stroke();
        }
    };

    handleMouseUp = (e) => {
        super.handleMouseUp(e);
        const circle = new Circle(
            this.context.strokeStyle,
            this.context.lineWidth,
            this.startX,
            this.startY,
            this.radius,
            this.fill
        );
        DrawingManager.addShape(circle);
    };
}

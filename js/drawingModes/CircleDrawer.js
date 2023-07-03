import {DrawingMode} from "./DrawingMode.js";
import {Circle} from "../drawnShapes/Circle.js";

export class CircleDrawer extends DrawingMode {
    startCircle(e) {
        super.startShape(e);
        this.canvas.addEventListener("mousemove", this._dragCircle);
        this.canvas.addEventListener("mouseup", this._endCircle);
    }

    _dragCircle = (e) => {
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

    _endCircle = () => {
        this.canvas.removeEventListener("mousemove", this._dragCircle);
        this.canvas.removeEventListener("mouseup", this._endCircle);
        const circle = new Circle(this.context.strokeStyle, this.context.lineWidth, this.startX, this.startY, this.radius, this.fill);
        DrawingMode.drawnShapes.push(circle);
    };
}
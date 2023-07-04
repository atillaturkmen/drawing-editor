import {DrawingMode} from "./DrawingMode.js";
import {PenShape} from "../drawnShapes/PenShape.js";

export class Pen extends DrawingMode {
    handleMouseDown = (e) => {
        super.handleMouseDown(e);
        this.drawing = true;
        this.path = [];
        this.context.beginPath();
        this.handleMouseMove(e);
    }

    handleMouseMove = (e) => {
        if (!this.drawing) return;

        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();

        this.path.push({
            x: x,
            y: y,
        });
    }

    handleMouseUp = () => {
        if (!this.drawing) return;
        this.drawing = false;

        super.handleMouseUp();

        const penShape = new PenShape(this.context.strokeStyle, this.context.lineWidth, this.path);
        DrawingMode.drawnShapes.push(penShape);
    }
}

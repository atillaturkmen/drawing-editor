import {DrawingMode} from "./DrawingMode.js";
import {PenShape} from "../drawnShapes/PenShape.js";

export class Pen extends DrawingMode {
    startDraw(e) {
        this.drawing = true;
        this.path = [];
        this.context.beginPath();
        this._draw(e);
        this.canvas.addEventListener("mousemove", this._draw.bind(this));
        this.canvas.addEventListener("mouseup", this._endDraw.bind(this));
    }

    _draw(e) {
        if (!this.drawing) return;

        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();

        this.path.push({
            x: x,
            y: y,
        });
    }

    _endDraw() {
        if (!this.drawing) return;

        this.drawing = false;
        this.canvas.removeEventListener("mousemove", this._draw.bind(this));
        this.canvas.removeEventListener("mouseup", this._endDraw.bind(this));
        const penShape = new PenShape(this.context.strokeStyle, this.context.lineWidth, this.path);
        DrawingMode.drawnShapes.push(penShape);
    }
}

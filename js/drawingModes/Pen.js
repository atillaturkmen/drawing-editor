import {DrawingMode} from "./DrawingMode.js";

export class Pen extends DrawingMode {
    startDraw(e) {
        this.drawing = true;
        this.context.beginPath();
        this._draw(e);
        this.canvas.addEventListener("mousemove", this._draw.bind(this));
        this.canvas.addEventListener("mouseup", this._endDraw.bind(this));
    }

    _endDraw() {
        this.drawing = false;
        this.canvas.removeEventListener("mousemove", this._draw.bind(this));
        this.canvas.removeEventListener("mouseup", this._endDraw.bind(this));
    }

    _draw(e) {
        if (!this.drawing) return;

        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();
    }
}

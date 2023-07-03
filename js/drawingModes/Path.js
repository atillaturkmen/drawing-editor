import {DrawingMode} from "./DrawingMode.js";

export class Path extends DrawingMode {
    startPath(e) {
        super.startShape(e);
        this.canvas.addEventListener("mousemove", this._dragPath);
        this.canvas.addEventListener("mouseup", this._endPath);
    }

    _dragPath = (e) => {
        this.context.putImageData(this.savedImageData, 0, 0);

        const {x, y} = this.getMousePos(e);
        this.endX = x;
        this.endY = y;

        this.context.beginPath();
        this.context.moveTo(this.startX, this.startY);
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    };

    _endPath = () => {
        this.canvas.removeEventListener("mousemove", this._dragPath);
        this.canvas.removeEventListener("mouseup", this._endPath);
        DrawingMode.drawnShapes.push({
            type: "path",
            startX: this.startX,
            startY: this.startY,
            endX: this.endX,
            endY: this.endY,
        });
    };
}

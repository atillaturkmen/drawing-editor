import { DrawingMode } from "./DrawingMode.js";

export class Path extends DrawingMode {
    startPath(e) {
        if (!this.isDrawing) {
            this.isDrawing = true;
            const { x, y } = this.getMousePos(e);
            this.startX = x;
            this.startY = y;
            this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.addEventListener("mousemove", this._dragPath);
            this.canvas.addEventListener("mouseup", this._endPath);
        }
    }

    _dragPath = (e) => {
        if (this.isDrawing) {
            const { x, y } = this.getMousePos(e);
            this.endX = x;
            this.endY = y;
            this.context.putImageData(this.savedImageData, 0, 0);

            this.context.beginPath();
            this.context.moveTo(this.startX, this.startY);
            this.context.lineTo(this.endX, this.endY);
            this.context.stroke();
        }
    };

    _endPath = () => {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.canvas.removeEventListener("mousemove", this._dragPath);
            this.canvas.removeEventListener("mouseup", this._endPath);
        }
    };
}

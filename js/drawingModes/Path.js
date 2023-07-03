import { DrawingMode } from "./DrawingMode.js";

export class Path extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
        this.isDrawing = false;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.savedImageData = null;
    }

    startPath(e) {
        if (!this.isDrawing) {
            this.isDrawing = true;
            const { x, y } = this.getMousePos(e);
            this.startX = x;
            this.startY = y;
            this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.addEventListener("mousemove", this.dragPath);
            this.canvas.addEventListener("mouseup", this.endPath);
        }
    }

    dragPath = (e) => {
        if (this.isDrawing) {
            const { x, y } = this.getMousePos(e);
            this.endX = x;
            this.endY = y;
            this.context.putImageData(this.savedImageData, 0, 0);
            this.drawPath();
        }
    };

    drawPath() {
        this.context.beginPath();
        this.context.moveTo(this.startX, this.startY);
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    }

    endPath = () => {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.canvas.removeEventListener("mousemove", this.dragPath);
            this.canvas.removeEventListener("mouseup", this.endPath);
        }
    };
}

import { DrawingMode } from "./DrawingMode.js";

export class Circle extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
        this.isDrawing = false;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.savedImageData = null;
    }

    startCircle(e) {
        if (!this.isDrawing) {
            this.isDrawing = true;
            const { x, y } = this.getMousePos(e);
            this.startX = x;
            this.startY = y;
            this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.addEventListener("mousemove", this.dragCircle);
            this.canvas.addEventListener("mouseup", this.endCircle);
        }
    }

    dragCircle = (e) => {
        if (this.isDrawing) {
            const { x, y } = this.getMousePos(e);
            this.endX = x;
            this.endY = y;
            this.context.putImageData(this.savedImageData, 0, 0);
            this.drawCircle();
        }
    };

    drawCircle() {
        const radius = Math.sqrt(Math.pow(this.endX - this.startX, 2) + Math.pow(this.endY - this.startY, 2));
        this.context.beginPath();
        this.context.arc(this.startX, this.startY, radius, 0, 2 * Math.PI);
        this.context.stroke();
    }

    endCircle = () => {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.canvas.removeEventListener("mousemove", this.dragCircle);
            this.canvas.removeEventListener("mouseup", this.endCircle);
        }
    };
}

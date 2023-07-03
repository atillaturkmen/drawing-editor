import {DrawingMode} from "./DrawingMode.js";

export class Rectangle extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
        this.drawing = false;
        this.dragging = false; // Flag for dragging
        this.startX = 0; // Initial X position of the rectangle
        this.startY = 0; // Initial Y position of the rectangle
    }

    startRect(e) {
        this.dragging = true; // Set dragging flag
        const {x, y} = this.getMousePos(e);
        this.startX = x; // Store initial X position
        this.startY = y; // Store initial Y position
        this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height); // Save the canvas image data
        window.addEventListener("mousemove", this._dragRect.bind(this));
        window.addEventListener("mouseup", this.endRect.bind(this));
    }

    endRect() {
        this.dragging = false; // Reset dragging flag
        window.removeEventListener("mousemove", this._dragRect.bind(this));
        window.removeEventListener("mouseup", this.endRect.bind(this));
    }

    _dragRect(e) {
        if (!this.dragging) return;

        const {x, y} = this.getMousePos(e);
        const width = x - this.startX;
        const height = y - this.startY;

        // Restore the saved canvas image data
        this.context.putImageData(this.savedImageData, 0, 0);

        // Draw the rectangle at the new position
        this.context.beginPath();
        this.context.rect(this.startX, this.startY, width, height);
        this.context.stroke();
    }
}

import {DrawingMode} from "./DrawingMode.js";

export class ShapeMover extends DrawingMode {

    constructor(context, canvas) {
        super(context, canvas);
        this.moveCursorActive = false;
    }
    handleMouseDown = (e) => {
        super.handleMouseDown(e);

        const {x, y} = this.getMousePos(e);

        for (let i = DrawingMode.drawnShapes.length - 1; i >= 0; i--) {
            const shape = DrawingMode.drawnShapes[i];
            if (shape.isSelected(x, y)) {
                this.selectedObject = shape;
                this.initialMouseX = x;
                this.initialMouseY = y;
                this.isDragging = true;
                return;
            }
        }
    }

    hoverForMoveCursor = (e) => {
        const {x, y} = this.getMousePos(e);
        for (let i = DrawingMode.drawnShapes.length - 1; i >= 0; i--) {
            const shape = DrawingMode.drawnShapes[i];
            if (shape.isSelected(x, y)) {
                if (!this.moveCursorActive) {
                    this.canvas.classList.toggle('cursor-move');
                    this.moveCursorActive = true;
                }
                return;
            }
        }
        if (this.moveCursorActive) {
            this.canvas.classList.toggle('cursor-move');
            this.moveCursorActive = false;
        }
    }

    handleMouseMove = (e) => {
        if (this.isDragging) {
            const {x, y} = this.getMousePos(e);

            // Calculate the difference in mouse position
            const deltaX = x - this.initialMouseX;
            const deltaY = y - this.initialMouseY;

            // Move the shape
            this.selectedObject.moveShape(deltaX, deltaY);

            // Redraw the canvas
            this._redrawCanvas();

            // Update the initial mouse position for the next move
            this.initialMouseX = x;
            this.initialMouseY = y;
        }
    }

    handleMouseUp = () => {
        super.handleMouseUp();
        this.isDragging = false;
    }

    _redrawCanvas = () => {
        const currentColor = this.context.strokeStyle;
        const currentSize = this.context.lineWidth;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const shape of DrawingMode.drawnShapes) {
            shape.drawShape(this.context);
        }

        this.context.strokeStyle = currentColor;
        this.context.fillStyle = currentColor;
        this.context.lineWidth = currentSize;
    }
}

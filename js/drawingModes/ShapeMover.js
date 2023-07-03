import {DrawingMode} from "./DrawingMode.js";

export class ShapeMover extends DrawingMode {
    startMove = (e) => {
        this.canvas.addEventListener("mousemove", this._handleMouseMove);
        this.canvas.addEventListener("mouseup", this._handleMouseUp);

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

    _handleMouseMove = (e) => {
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

    _handleMouseUp = () => {
        this.isDragging = false;
        this.canvas.removeEventListener("mousemove", this._handleMouseMove);
        this.canvas.removeEventListener("mouseup", this._handleMouseUp);
    }

    _redrawCanvas = () => {
        const currentColor = this.context.strokeStyle;
        const currentSize = this.context.lineWidth;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const shape of DrawingMode.drawnShapes) {
            shape.drawShape(this.context);
        }

        this.context.strokeStyle = currentColor;
        this.context.lineWidth = currentSize;
    }
}

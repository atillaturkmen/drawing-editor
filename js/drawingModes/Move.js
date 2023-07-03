import {DrawingMode} from "./DrawingMode.js";

export class Move extends DrawingMode {
    startMove = (e) => {
        this.canvas.addEventListener("mousemove", this._handleMouseMove);
        this.canvas.addEventListener("mouseup", this._handleMouseUp);

        const {x, y} = this.getMousePos(e);

        for (let i = DrawingMode.drawnShapes.length - 1; i >= 0; i--) {
            const shape = DrawingMode.drawnShapes[i];
            switch (shape.type) {
                case 'rectangle':
                    if (
                        x >= shape.startX &&
                        x <= shape.startX + shape.width &&
                        y >= shape.startY &&
                        y <= shape.startY + shape.height
                    ) {
                        console.log('selected');
                        this.selectedObject = shape;
                        this.initialMouseX = x;
                        this.initialMouseY = y;
                        this.isDragging = true;
                        break;
                    }
            }
        }
    }

    _handleMouseMove = (e) => {
        if (this.isDragging) {
            const {x, y} = this.getMousePos(e);

            // Calculate the difference in mouse position
            const deltaX = x - this.initialMouseX;
            const deltaY = y - this.initialMouseY;

            // Update the object's position
            this.selectedObject.startX += deltaX;
            this.selectedObject.startY += deltaY;

            // Redraw the canvas
            this.redrawCanvas();

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

    redrawCanvas = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        console.log(DrawingMode.drawnShapes);
        for (const shape of DrawingMode.drawnShapes) {
            switch (shape.type) {
                case 'rectangle':
                    // Draw the rectangle at the updated position
                    this.context.beginPath();
                    this.context.rect(shape.startX, shape.startY, shape.width, shape.height);
                    if (shape.fill) {
                        this.context.fill();
                    } else {
                        this.context.stroke();
                    }
                    break;
            }
        }
    }
}

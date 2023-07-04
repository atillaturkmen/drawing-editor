import {DrawingMode} from "./DrawingMode.js";
import {DrawingManager} from "../DrawingManager.js";

export class ShapeMover extends DrawingMode {

    constructor(context, canvas) {
        super(context, canvas);
        this.moveCursorActive = false;
    }

    handleMouseDown = (e) => {
        super.handleMouseDown(e);

        const {x, y} = this.getMousePos(e);

        const history = DrawingManager.getShapes();

        for (let i = history.length - 1; i >= 0; i--) {
            const shape = history[i];
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
        const history = DrawingManager.getShapes();

        for (let i = history.length - 1; i >= 0; i--) {
            const shape = history[i];
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
            DrawingManager.redrawCanvas(this.context, this.canvas);

            // Update the initial mouse position for the next move
            this.initialMouseX = x;
            this.initialMouseY = y;
        }
    }

    handleMouseUp = () => {
        super.handleMouseUp();
        this.isDragging = false;
    }
}

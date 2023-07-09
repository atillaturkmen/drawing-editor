import {DrawingManager} from "../../DrawingManager.js";
import {EditTools} from "./editTools.js";

export class ShapeMover extends EditTools {

    constructor(context, canvas) {
        super(context, canvas);
        this.customCursorName = 'cursor-move';
    }

    shapeSelected = (x, y, shape) => {
        this.selectedObject = shape;
        this.initialMouseX = x;
        this.initialMouseY = y;
        this.isDragging = true;
    }

    handleMouseUp = () => {
        this.canvas.removeEventListener("mousemove", this.handleMouseMove);
        this.isDragging = false;
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
}

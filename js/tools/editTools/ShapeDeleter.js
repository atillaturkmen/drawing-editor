import {DrawingManager} from "../../DrawingManager.js";
import {EditTools} from "./editTools.js";

export class ShapeDeleter extends EditTools {

    constructor(context, canvas) {
        super(context, canvas);
        this.customCursorName = 'cursor-not-allowed';
    }

    shapeSelected = (x, y, shape) => {
        this.canvas.classList.toggle(this.customCursorName);
        this.customCursorActive = false;
        DrawingManager.deleteShape(shape);
        DrawingManager.redrawCanvas(this.context, this.canvas);
    }
}

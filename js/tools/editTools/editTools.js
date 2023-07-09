import {DrawingManager} from "../../DrawingManager.js";
import {Tool} from "../Tool.js";

export class EditTools extends Tool {

    constructor(context, canvas) {
        super(context, canvas);
        this.customCursorActive = false;
    }

    handleMouseDown = (e) => {
        this.canvas.addEventListener("mousemove", this.handleMouseMove);
        this.canvas.addEventListener("mouseup", this.handleMouseUp);

        const {x, y} = this.getMousePos(e);

        const history = DrawingManager.getShapes();

        for (let i = history.length - 1; i >= 0; i--) {
            const shape = history[i];
            if (shape.isSelected(x, y)) {
                this.shapeSelected(x, y, shape);
                return;
            }
        }
    }

    hoverForCustomCursor = (e) => {
        const {x, y} = this.getMousePos(e);
        const history = DrawingManager.getShapes();

        for (let i = history.length - 1; i >= 0; i--) {
            const shape = history[i];
            if (shape.isSelected(x, y)) {
                if (!this.customCursorActive) {
                    this.canvas.classList.toggle(this.customCursorName);
                    this.customCursorActive = true;
                }
                return;
            }
        }
        if (this.customCursorActive) {
            this.canvas.classList.toggle(this.customCursorName);
            this.customCursorActive = false;
        }
    }

    stopHoverForCustomCursor = () => {
        if (this.customCursorActive) {
            this.canvas.classList.toggle(this.customCursorName);
            this.customCursorActive = false;
        }
    }
}

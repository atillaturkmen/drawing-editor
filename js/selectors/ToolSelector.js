import {Pen} from "../drawingModes/Pen.js";
import {LineDrawer} from "../drawingModes/LineDrawer.js";
import {RectangleDrawer} from "../drawingModes/RectangleDrawer.js";
import {CircleDrawer} from "../drawingModes/CircleDrawer.js";
import {ShapeMover} from "../drawingModes/ShapeMover.js";

export class ToolSelector {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.context = context;
        this.activeEvent = null;

        this.pen = new Pen(context, canvas);
        this.path = new LineDrawer(context, canvas);
        this.rect = new RectangleDrawer(context, canvas);
        this.circle = new CircleDrawer(context, canvas);
        this.move = new ShapeMover(context, canvas);

        // Bind the functions to their respective objects
        this.penStartDraw = this.pen.startDraw.bind(this.pen);
        this.startPath = this.path.startPath.bind(this.path);
        this.startRect = this.rect.startRect.bind(this.rect);
        this.startCircle = this.circle.startCircle.bind(this.circle);
        this.startMove = this.move.startMove.bind(this.move);
    }

    toggleFill() {
        this.rect.toggleFill();
        this.circle.toggleFill();
    }

    setMode(e, mode) {
        this.canvas.removeEventListener("mousedown", this.activeEvent);

        switch (mode) {
            case 'pen':
                this.canvas.addEventListener("mousedown", this.penStartDraw);
                this.activeEvent = this.penStartDraw;
                break;

            case 'path':
                this.canvas.addEventListener("mousedown", this.startPath);
                this.activeEvent = this.startPath;
                break;

            case 'rect':
                this.canvas.addEventListener("mousedown", this.startRect);
                this.activeEvent = this.startRect;
                break;

            case 'circle':
                this.canvas.addEventListener("mousedown", this.startCircle);
                this.activeEvent = this.startCircle;
                break;

            case 'move':
                this.canvas.addEventListener("mousedown", this.startMove);
                this.activeEvent = this.startMove;
                break;
        }

        this._selectMode(e);
    }

    _selectMode(e) {
        const tools = document.getElementsByClassName("tool");
        for (const tool of tools) {
            tool.classList.remove('selected');
        }

        const size = document.querySelector(".size.selected");
        if (size !== null) {
            size.classList.remove('hide-select');
        }

        e.target.parentElement.classList.add('selected');
    }
}

import {Pen} from "./tools/drawingTools/Pen.js";
import {LineDrawer} from "./tools/drawingTools/LineDrawer.js";
import {RectangleDrawer} from "./tools/drawingTools/RectangleDrawer.js";
import {CircleDrawer} from "./tools/drawingTools/CircleDrawer.js";
import {ShapeMover} from "./tools/editTools/ShapeMover.js";
import {ShapeDeleter} from "./tools/editTools/ShapeDeleter.js";

export class ToolSelector {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.context = context;

        this.activeMouseDownEvent = null;
        this.activeMouseMoveEvent = null;
        this.activeMouseLeaveEvent = null;

        this.pen = new Pen(context, canvas);
        this.path = new LineDrawer(context, canvas);
        this.rect = new RectangleDrawer(context, canvas);
        this.circle = new CircleDrawer(context, canvas);
        this.move = new ShapeMover(context, canvas);
        this.delete = new ShapeDeleter(context, canvas);

        // Bind the functions to their respective objects
        this.penStartDraw = this.pen.handleMouseDown.bind(this.pen);
        this.startPath = this.path.handleMouseDown.bind(this.path);
        this.startRect = this.rect.handleMouseDown.bind(this.rect);
        this.startCircle = this.circle.handleMouseDown.bind(this.circle);
        this.startMove = this.move.handleMouseDown.bind(this.move);
        this.hoverMove = this.move.hoverForCustomCursor.bind(this.move);
        this.stopHoverMove = this.move.stopHoverForCustomCursor.bind(this.move);
        this.startDelete = this.delete.handleMouseDown.bind(this.delete);
        this.hoverDelete = this.delete.hoverForCustomCursor.bind(this.delete);
        this.stopHoverDelete = this.delete.stopHoverForCustomCursor.bind(this.delete);
    }

    setMode(e, mode) {
        this.canvas.removeEventListener("mousedown", this.activeMouseDownEvent);
        this.canvas.removeEventListener("mousemove", this.activeMouseMoveEvent);
        this.canvas.removeEventListener("mouseleave", this.activeMouseLeaveEvent);

        switch (mode) {
            case 'pen':
                this.canvas.addEventListener("mousedown", this.penStartDraw);
                this.activeMouseDownEvent = this.penStartDraw;
                break;

            case 'path':
                this.canvas.addEventListener("mousedown", this.startPath);
                this.activeMouseDownEvent = this.startPath;
                break;

            case 'empty-rect':
                this.rect.fill = false;
                this.canvas.addEventListener("mousedown", this.startRect);
                this.activeMouseDownEvent = this.startRect;
                break;

            case 'filled-rect':
                this.rect.fill = true;
                this.canvas.addEventListener("mousedown", this.startRect);
                this.activeMouseDownEvent = this.startRect;
                break;

            case 'empty-circle':
                this.circle.fill = false;
                this.canvas.addEventListener("mousedown", this.startCircle);
                this.activeMouseDownEvent = this.startCircle;
                break;

            case 'filled-circle':
                this.circle.fill = true;
                this.canvas.addEventListener("mousedown", this.startCircle);
                this.activeMouseDownEvent = this.startCircle;
                break;

            case 'move':
                this.canvas.addEventListener("mousedown", this.startMove);
                this.canvas.addEventListener("mousemove", this.hoverMove);
                this.canvas.addEventListener("mouseleave", this.stopHoverMove);
                this.activeMouseDownEvent = this.startMove;
                this.activeMouseMoveEvent = this.hoverMove;
                this.activeMouseLeaveEvent = this.stopHoverMove;
                break;

            case 'delete':
                this.canvas.addEventListener("mousedown", this.startDelete);
                this.canvas.addEventListener("mousemove", this.hoverDelete);
                this.canvas.addEventListener("mouseleave", this.stopHoverDelete);
                this.activeMouseDownEvent = this.startDelete;
                this.activeMouseMoveEvent = this.hoverDelete;
                this.activeMouseLeaveEvent = this.stopHoverDelete;
                break;
        }

        this._selectMode(e);
    }

    _selectMode(e) {
        const tools = document.getElementsByClassName("tool");

        for (const tool of tools) {
            tool.classList.remove('selected');
        }

        // If the user clicks on the icon instead of the button, the target will be the icon instead of the button
        // Parent is the button, so we need to check if the parent has the class instead of the target
        if (e.target.parentElement.classList.contains('tool')) {
            e.target.parentElement.classList.add('selected');
        } else {
            e.target.classList.add('selected');
        }
    }
}

import {Pen} from "../drawingModes/Pen.js";
import {Path} from "../drawingModes/Path.js";
import {Rectangle} from "../drawingModes/Rectangle.js";
import {Circle} from "../drawingModes/Circle.js";

export class ToolSelector {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.activeEvent = null;

        this.pen = new Pen(context, canvas);
        this.path = new Path(context, canvas);
        this.rect = new Rectangle(context, canvas);
        this.circle = new Circle(context, canvas);

        // Bind the functions to their respective objects
        this.penStartDraw = this.pen.startDraw.bind(this.pen);
        this.pathStart = this.path.startPath.bind(this.path);
        this.rectStart = this.rect.startRect.bind(this.rect);
        this.circleStart = this.circle.startCircle.bind(this.circle);
    }

    setMode(e, mode) {
        this.canvas.removeEventListener("mousedown", this.activeEvent);

        switch (mode) {
            case 'pen':
                this.canvas.addEventListener("mousedown", this.penStartDraw);
                this.activeEvent = this.penStartDraw;
                break;

            case 'path':
                this.canvas.addEventListener("mousedown", this.pathStart);
                this.activeEvent = this.pathStart;
                break;

            case 'rect':
                this.canvas.addEventListener("mousedown", this.rectStart);
                this.activeEvent = this.rectStart;
                break;

            case 'circle':
                this.canvas.addEventListener("mousedown", this.circleStart);
                this.activeEvent = this.circleStart;
                break;

            default:
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

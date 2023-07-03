import {Pen} from "../drawingModes/Pen.js";
import {Path} from "../drawingModes/Path.js";
import {Rectangle} from "../drawingModes/Rectangle.js";

export class ToolSelector {
    constructor(context, canvas) {
        this.canvas = canvas;
        this.activeEvents = {
            "mousedown": undefined,
            "mouseup": undefined,
            "mousemove": undefined,
        };
        this.pen = new Pen(context, canvas);
        this.path = new Path(context, canvas);
        this.rect = new Rectangle(context, canvas);

        // Bind the functions to their respective objects
        this.penStartDraw = this.pen.startDraw.bind(this.pen);
        this.penEndDraw = this.pen.endDraw.bind(this.pen);
        this.penDraw = this.pen.draw.bind(this.pen);

        this.pathStartPath = this.path.startPath.bind(this.path);
        this.pathEndPath = this.path.endPath.bind(this.path);

        this.rectStartRect = this.rect.startRect.bind(this.rect);
    }

    setMode(e, mode) {
        for (const event in this.activeEvents) {
            this.canvas.removeEventListener(event, this.activeEvents[event]);
            this.activeEvents[event] = undefined;
        }

        switch (mode) {
            case 'pen':
                this.canvas.addEventListener("mousedown", this.penStartDraw);
                this.canvas.addEventListener("mouseup", this.penEndDraw);
                this.canvas.addEventListener("mousemove", this.penDraw);

                this.activeEvents['mousedown'] = this.penStartDraw;
                this.activeEvents['mouseup'] = this.penEndDraw;
                this.activeEvents['mousemove'] = this.penDraw;
                break;
            case 'path':
                this.canvas.addEventListener("mousedown", this.pathStartPath);
                this.activeEvents['mousedown'] = this.pathStartPath;
                break;
            case 'rect':
                this.canvas.addEventListener("mousedown", this.rectStartRect);
                this.activeEvents['mousedown'] = this.rectStartRect;
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

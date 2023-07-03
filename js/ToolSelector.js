import {Pen} from "./DrawingModes/Pen.js";
import {Path} from "./DrawingModes/Path.js";
import {Rectangle} from "./DrawingModes/Rectangle.js";

export class ToolSelector {
    constructor(context, canvas) {
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
        this.rectEndRect = this.rect.endRect.bind(this.rect);
    }

    setMode(e, mode) {
        for (const event in this.activeEvents) {
            window.removeEventListener(event, this.activeEvents[event]);
            this.activeEvents[event] = undefined;
        }

        switch (mode) {
            case 'pen':
                window.addEventListener("mousedown", this.penStartDraw);
                window.addEventListener("mouseup", this.penEndDraw);
                window.addEventListener("mousemove", this.penDraw);

                this.activeEvents['mousedown'] = this.penStartDraw;
                this.activeEvents['mouseup'] = this.penEndDraw;
                this.activeEvents['mousemove'] = this.penDraw;
                break;
            case 'path':
                window.addEventListener("mousedown", this.pathStartPath);
                window.addEventListener("mouseup", this.pathEndPath);

                this.activeEvents['mousedown'] = this.pathStartPath;
                this.activeEvents['mouseup'] = this.pathEndPath;
                break;
            case 'rect':
                window.addEventListener("mousedown", this.rectStartRect);
                window.addEventListener("mouseup", this.rectEndRect);

                this.activeEvents['mousedown'] = this.rectStartRect;
                this.activeEvents['mouseup'] = this.rectEndRect;
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

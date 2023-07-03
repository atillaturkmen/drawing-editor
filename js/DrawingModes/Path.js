import {DrawingMode} from "./DrawingMode.js";

export class Path extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
    }

    startPath(e) {
        this.drawing = true;
        this.context.beginPath();
        this.draw(e);
    }

    endPath(e) {
        this.drawing = false;
        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();
    }
}

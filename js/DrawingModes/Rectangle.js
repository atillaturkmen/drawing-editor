import {DrawingMode} from "./DrawingMode.js";

export class Rectangle extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
        this. start = {};
    }

    startRect(e) {
        this.start = this.getMousePos(e);
    }

    endRect(e) {
        let { x, y } = this.getMousePos(e);
        this.context.fillRect(this.start.x, this.start.y, x - this.start.x, y - this.start.y);
    }
}

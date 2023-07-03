import {DrawingMode} from "./DrawingMode.js";

export class Pen extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
    }

    startDraw(e) {
        this.drawing = true;
        this.context.beginPath();
        this.draw(e);
    }

    endDraw() {
        this.drawing = false;
    }
}

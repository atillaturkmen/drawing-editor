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

    draw(e) {
        if (!this.drawing) return;

        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();
    }
}

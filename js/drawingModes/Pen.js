import {DrawingMode} from "./DrawingMode.js";

export class Pen extends DrawingMode {
    constructor(context, canvas) {
        super(context, canvas);
    }

    startDraw(e) {
        this.drawing = true;
        this.context.beginPath();
        this.draw(e);
        this.canvas.addEventListener("mousemove", this.draw.bind(this));
        this.canvas.addEventListener("mouseup", this.endDraw.bind(this));
    }

    endDraw() {
        this.drawing = false;
        this.canvas.removeEventListener("mousemove", this.draw.bind(this));
        this.canvas.removeEventListener("mouseup", this.endDraw.bind(this));
    }

    draw(e) {
        if (!this.drawing) return;

        let {x, y} = this.getMousePos(e);

        this.context.lineTo(x, y);
        this.context.stroke();
    }
}

import {Tool} from "../Tool.js";

export class DrawingTools extends Tool {
    constructor(context, canvas) {
        super(context, canvas);
        this.fill = false;
    }

    handleMouseDown(e) {
        const {x, y} = this.getMousePos(e);
        this.startX = x;
        this.startY = y;
        this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.addEventListener("mousemove", this.handleMouseMove);
        this.canvas.addEventListener("mouseup", this.handleMouseUp);
        this.canvas.addEventListener("mouseleave", this.handleMouseLeave);
    }

    handleMouseUp() {
        this.canvas.removeEventListener("mousemove", this.handleMouseMove);
        this.canvas.removeEventListener("mouseup", this.handleMouseUp);
    }

    handleMouseLeave = () => {
        this.canvas.removeEventListener("mousemove", this.handleMouseMove);
    }
}

import {DrawingMode} from "./DrawingMode.js";
import {Line} from "../drawnShapes/Line.js";

export class LineDrawer extends DrawingMode {
    handleMouseMove = (e) => {
        this.context.putImageData(this.savedImageData, 0, 0);

        const {x, y} = this.getMousePos(e);
        this.endX = x;
        this.endY = y;

        this.context.beginPath();
        this.context.moveTo(this.startX, this.startY);
        this.context.lineTo(this.endX, this.endY);
        this.context.stroke();
    };

    handleMouseUp = () => {
        super.handleMouseUp();
        const line = new Line(this.context.strokeStyle, this.context.lineWidth, this.startX, this.startY, this.endX, this.endY);
        DrawingMode.drawnShapes.push(line);
    };
}

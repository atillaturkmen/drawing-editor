import {DrawingMode} from "./DrawingMode.js";
import {Rectangle} from "../drawnShapes/Rectangle.js";
import {DrawingManager} from "../DrawingManager.js";

export class RectangleDrawer extends DrawingMode {
    handleMouseMove = (e) => {
        this.context.putImageData(this.savedImageData, 0, 0);

        const {x, y} = this.getMousePos(e);
        this.endX = x;
        this.endY = y;

        const width = this.endX - this.startX;
        const height = this.endY - this.startY;

        this.context.beginPath();
        this.context.rect(this.startX, this.startY, width, height);

        if (this.fill) {
            this.context.fill();
        } else {
            this.context.stroke();
        }
    };

    handleMouseUp = () => {
        super.handleMouseUp();
        const rectangle = new Rectangle(
            this.context.strokeStyle,
            this.context.lineWidth,
            this.startX,
            this.startY,
            this.endX - this.startX,
            this.endY - this.startY,
            this.fill,
        );
        DrawingManager.addShape(rectangle);
    };
}

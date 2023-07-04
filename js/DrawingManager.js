export class DrawingManager {
    static history = [];

    static addShape(shape) {
        DrawingManager.history.push(shape);
    }

    static getShapes() {
        return DrawingManager.history;
    }

    static clearHistory() {
        DrawingManager.history = [];
    }

    static undoLastShape() {
        DrawingManager.history.pop();
    }

    static clearCanvas(context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    static redrawCanvas(context, canvas) {
        const currentColor = context.strokeStyle;
        const currentSize = context.lineWidth;

        this.clearCanvas(context, canvas);

        const history = DrawingManager.getShapes();
        for (const shape of history) {
            shape.drawShape(context);
        }

        context.strokeStyle = currentColor;
        context.fillStyle = currentColor;
        context.lineWidth = currentSize;
    }
}

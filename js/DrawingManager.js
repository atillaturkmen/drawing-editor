export class DrawingManager {
    static history = [];
    static undoneHistory = [];

    static addShape(shape) {
        DrawingManager.undoneHistory = [];
        DrawingManager.history.push(shape);
    }

    static deleteShape(shape) {
        const index = DrawingManager.history.indexOf(shape);
        DrawingManager.history.splice(index, 1);
    }

    static getShapes() {
        return DrawingManager.history;
    }

    static clearHistory() {
        DrawingManager.history = [];
        DrawingManager.undoneHistory = [];
    }

    static undoLastShape() {
        const lastShape = DrawingManager.history.pop();
        if (lastShape) {
            DrawingManager.undoneHistory.push(lastShape);
        }
    }

    static redoLastShape() {
        const lastUndoneShape = DrawingManager.undoneHistory.pop();
        if (lastUndoneShape) {
            DrawingManager.history.push(lastUndoneShape);
        }
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

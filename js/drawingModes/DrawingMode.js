export class DrawingMode {
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.fill = false;
        DrawingMode.drawnShapes = [];
    }

    startShape(e) {
        const {x, y} = this.getMousePos(e);
        this.startX = x;
        this.startY = y;
        this.savedImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    }

    getMousePos(evt) {
        let rect = this.canvas.getBoundingClientRect(),
            scaleX = this.canvas.width / rect.width,
            scaleY = this.canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        }
    }

    toggleFill() {
        this.fill = !this.fill;
    }
}

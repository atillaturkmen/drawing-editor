export class DrawingMode{
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.drawing = false;
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
}

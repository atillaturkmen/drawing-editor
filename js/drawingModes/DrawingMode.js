export class DrawingMode {
    constructor(context, canvas) {
        this.context = context;
        this.canvas = canvas;
        this.fill = false;
        DrawingMode.drawnShapes = [];
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

    handleMouseMove() {
        throw new Error('Abstract method handleMouseMove has not been implemented.');
    }

    handleMouseLeave = () => {
        this.canvas.removeEventListener("mousemove", this.handleMouseMove);
    }
}

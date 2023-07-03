export class ColorSelector {
    constructor(context) {
        this.context = context;
        this._colors = {
            "black": "#000000",
            "white": "#ffffff",
            "red": "#ef4444",
            "green": "#22c55e",
            "blue": "#3b82f6",
            "yellow": "#eab308",
            "orange": "#f97316",
            "violet": "#8b5cf6"
        };
    }

    setColor(e, color) {
        this.context.strokeStyle = this._colors[color];
        this.context.fillStyle = this._colors[color];
        this._selectColor(e);
    }

    _selectColor(e) {
        const colors = document.getElementById("colors").children;
        for (const color of colors) {
            color.classList.remove('selected');
        }

        e.target.classList.add('selected');
    }
}

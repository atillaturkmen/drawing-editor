import {DrawingManager} from "../DrawingManager.js";

export function initClearCanvasButton(context, canvas) {
    function clearCanvas() {
        DrawingManager.clearHistory();
        DrawingManager.clearCanvas(context, canvas);
    }
    document.getElementById('clear').addEventListener('click', clearCanvas);
}

import {DrawingManager} from "../DrawingManager.js";

export function initUndoShortcut(context, canvas) {
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key === "z") {
            undo();
        }
    }

    function undo() {
        DrawingManager.undoLastShape();
        DrawingManager.redrawCanvas(context, canvas);
    }
}

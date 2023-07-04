import { DrawingManager } from "../DrawingManager.js";

export function initUndoShortcut(context, canvas) {
    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key.toLowerCase() === "z") {
            if (event.shiftKey) {
                redo();
            } else {
                undo();
            }
        }
    }

    function undo() {
        DrawingManager.undoLastShape();
        DrawingManager.redrawCanvas(context, canvas);
    }

    function redo() {
        DrawingManager.redoLastShape();
        DrawingManager.redrawCanvas(context, canvas);
    }
}

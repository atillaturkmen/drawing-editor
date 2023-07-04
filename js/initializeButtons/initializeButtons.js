import {initColorSelection} from "./initColorSelection.js";
import {initToolSelection} from "./initToolSelection.js";
import {initSizeSelection} from "./initSizeSelection.js";
import {initClearCanvasButton} from "./initClearCanvasButton.js";
import {initUndoShortcut} from "./initUndoShortcut.js";

export function initializeButtons(context, canvas) {
    initColorSelection(context);
    initToolSelection(context, canvas);
    initSizeSelection(context);
    initClearCanvasButton(context, canvas);
    initUndoShortcut(context, canvas);
}

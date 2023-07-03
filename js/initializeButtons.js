import {ColorSelector} from "./selectors/ColorSelector.js";
import {ToolSelector} from "./selectors/ToolSelector.js";
import {SizeSelector} from "./selectors/SizeSelector.js";

export function initializeButtons(context, canvas) {
    // Color Selection Initialization

    const colorSelector = new ColorSelector(context);
    const colorButtons = document.getElementById('colors').children;

    for (const colorButton of colorButtons) {
        colorButton.addEventListener('click', (e) => {
            colorSelector.setColor(e, colorButton.classList.value.replace(/bg-(\w*).*/, '$1'));
        });
    }

    // Tool Selection Initialization

    const toolSelector = new ToolSelector(context, canvas);
    const tools = document.getElementsByClassName('tool');

    for (const tool of tools) {
        tool.addEventListener('click', (e) => {
            toolSelector.setMode(e, tool.id);
        });
    }

    // Size Selection Initialization

    const sizeSelector = new SizeSelector(context);
    const sizeButtons = document.getElementsByClassName('size');
    for (const sizeButton of sizeButtons) {
        sizeButton.addEventListener('click', (e) => {
            sizeSelector.setSize(e, sizeButton.id);
        });
    }

    // Clear Canvas Button Initialization

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    document.getElementById('clear').addEventListener('click', clearCanvas);

    // Fill Button Initialization

    function toggleFill() {
        toolSelector.toggleFill();
        this.classList.toggle('selected');
    }
    document.getElementById('fill').addEventListener('click', toggleFill);
}

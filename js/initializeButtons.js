import {ToolSelector} from "./selectors/ToolSelector.js";
import {SizeSelector} from "./selectors/SizeSelector.js";

export function initializeButtons(context, canvas) {
    // Color Selection Initialization

    const colorPicker = document.getElementById("color-picker");
    const colorPreview = document.getElementById("color-picker-label");

    // Trigger the color picker when clicking the color preview
    colorPreview.addEventListener("click", function() {
        colorPicker.click();
    });

    // Update the color preview when the color picker value changes
    colorPicker.addEventListener("input", function() {
        colorPreview.style.backgroundColor = colorPicker.value;
        context.strokeStyle = colorPicker.value;
        context.fillStyle = colorPicker.value;
    });

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

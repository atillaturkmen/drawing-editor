import {ToolSelector} from "../ToolSelector.js";

export function initToolSelection(context, canvas) {
    const toolSelector = new ToolSelector(context, canvas);
    const tools = document.getElementsByClassName('tool');

    for (const tool of tools) {
        tool.addEventListener('click', (e) => {
            toolSelector.setMode(e, tool.id);
        });
    }

    // fill button is a special case because it is actually a toggle instead of a mode
    let fillWasSelected = false;
    const circleIcon = document.getElementById("circle-img");
    const squareIcon = document.getElementById("rect-img");

    function toggleFill() {
        toolSelector.toggleFill();
        this.classList.toggle('selected');

        fillWasSelected = !fillWasSelected;
        if (fillWasSelected) {
            circleIcon.src = new URL('/assets/circle.svg', import.meta.url);
            squareIcon.src = new URL('/assets/square.svg', import.meta.url);
        } else {
            circleIcon.src = new URL('/assets/empty-circle.svg', import.meta.url);
            squareIcon.src = new URL('/assets/empty-square.svg', import.meta.url);
        }

    }

    document.getElementById('fill').addEventListener('click', toggleFill);
}

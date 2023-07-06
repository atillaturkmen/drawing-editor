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

        if (fillWasSelected) {
            fillWasSelected = false;
            circleIcon.src = "./assets/empty-circle.svg";
            squareIcon.src = "./assets/empty-square.svg";
        } else {
            fillWasSelected = true;
            circleIcon.src = "./assets/circle.svg";
            squareIcon.src = "./assets/square.svg";
        }

    }

    document.getElementById('fill').addEventListener('click', toggleFill);
}

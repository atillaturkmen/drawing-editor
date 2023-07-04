import {ToolSelector} from "../ToolSelector.js";

export function initToolSelection(context, canvas) {
    const toolSelector = new ToolSelector(context, canvas);
    const tools = document.getElementsByClassName('tool');

    for (const tool of tools) {
        tool.addEventListener('click', (e) => {
            toolSelector.setMode(e, tool.id);
        });
    }
}

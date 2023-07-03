import '../css/style.css'
import {ColorSelector} from "./ColorSelector.js";
import {ToolSelector} from "./ToolSelector.js";
import {SizeSelector} from "./SizeSelector.js";

const canvas = document.getElementById("canvas");
const width = 1920;
const height = 1080;

// context of the canvas
const context = canvas.getContext("2d");

// resize canvas
canvas.height = height;
canvas.width = width;

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

// Clear canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
document.getElementById('clear').addEventListener('click', clearCanvas);

// set default settings
context.lineCap = 'round';
document.getElementById('small').firstElementChild.click();
document.getElementById('pen').firstElementChild.click();
document.getElementById('black').click();

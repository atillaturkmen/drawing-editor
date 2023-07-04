import '../css/style.css'
import {initializeButtons} from "./initializeButtons.js";

const canvas = document.getElementById("canvas");

// resize canvas
canvas.height = window.screen.height;
canvas.width = window.screen.width;

// move cursor sometimes doesn't work if I don't add it to the html first (??)
// so I'm adding it in HTML and then removing it here
canvas.classList.toggle('cursor-move');

// context of the canvas
const context = canvas.getContext("2d");

context.lineCap = "round";
context.lineJoin = "round";

initializeButtons(context, canvas);

// set default settings
context.lineCap = 'round';
document.getElementById('pen').firstElementChild.click();

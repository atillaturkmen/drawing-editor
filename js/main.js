import '../css/style.css'
import {initializeButtons} from "./initializeButtons/initializeButtons.js";

const canvas = document.getElementById("canvas");

// resize canvas
canvas.height = window.screen.height;
canvas.width = window.screen.width;

// custom cursors sometimes doesn't work if I don't add it to the html first (??)
// so I'm adding it in HTML and then removing it here
canvas.classList.toggle('cursor-move');
canvas.classList.toggle('cursor-not-allowed');

// context of the canvas
const context = canvas.getContext("2d");

// set default settings
context.lineCap = 'round';
context.lineJoin = "round";
context.lineWidth = 5;

// initialize buttons
initializeButtons(context, canvas);

// set default tool
document.getElementById('pen').firstElementChild.click();

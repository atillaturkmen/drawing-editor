import '../css/style.css'
import {initializeButtons} from "./initializeButtons.js";

const canvas = document.getElementById("canvas");
const width = window.innerWidth;
const height = window.innerHeight;

// context of the canvas
const context = canvas.getContext("2d");

// resize canvas
canvas.height = height;
canvas.width = width;

initializeButtons(context, canvas);

// set default settings
context.lineCap = 'round';
document.getElementById('small').firstElementChild.click();
document.getElementById('pen').firstElementChild.click();
document.getElementById('black').click();

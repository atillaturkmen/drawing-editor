export function initSizeSelection(context) {
    const paintSizeSlider = document.getElementById("paint-size-slider");
    const paintSizeValue = document.getElementById("paint-size-value");
    paintSizeSlider.addEventListener("input", function () {
        context.lineWidth = parseInt(paintSizeSlider.value);
        paintSizeValue.innerHTML = paintSizeSlider.value;
    });
}

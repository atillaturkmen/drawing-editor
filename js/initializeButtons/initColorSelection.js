export function initColorSelection(context) {
    const colorPicker = document.getElementById("color-picker");
    const colorPreview = document.getElementById("color-picker-label");

    // Trigger the color picker when clicking the color preview
    colorPreview.addEventListener("click", function() {
        colorPicker.click();
    });

    // Update the color preview when the color picker value changes
    colorPicker.addEventListener("input", function() {
        colorPreview.style.backgroundImage = "none";
        colorPreview.style.backgroundColor = colorPicker.value;
        context.strokeStyle = colorPicker.value;
        context.fillStyle = colorPicker.value;
    });
}

# Drawing Editor

The Drawing Editor is a web application that allows users to draw and create shapes on a canvas. It provides various drawing modes, such as pen, line, rectangle, and circle, along with the ability to undo and redo drawing actions.

## Features

- Drawing modes: Choose from different drawing modes, including pen, line, rectangle, and circle.
- Color and size selection: Customize the color and size of the drawing tools.
- Undo/Redo: Easily undo or redo the previous drawing actions.
- Move functionality: Select and move shapes within the drawing editor.
- Clear canvas: Clear the canvas to start a new drawing.
- Keyboard shortcuts: Use keyboard shortcuts for undo (Ctrl+Z) and redo (Ctrl+Shift+Z).

## Technologies Used

- HTML5: Provides the structure and elements of the web application.
- CSS3: Styles the user interface and layout of the application.
- JavaScript: Implements the interactive functionality and drawing logic.
- Canvas API: Utilizes the HTML5 Canvas element for drawing and rendering shapes.

## Getting Started

To get started with the Drawing Editor, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/drawing-editor.git`
2. Navigate to the project directory: `cd drawing-editor`
3. Install the required dependencies: `npm install`
4. Start the development server: `npm run dev`

## Build Setup

If you want to modify and build the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/drawing-editor.git`
2. Navigate to the project directory: `cd drawing-editor`
3. Install the required dependencies: `npm install`
4. Make your changes to the source code.
5. Build the project: `npm run build`
6. The compiled and optimized files will be available in the `dist` directory.

## Usage

- Select a drawing mode from the toolbar.
- Choose the desired color and size for the drawing tool.
- Click and drag on the canvas to draw shapes.
- Use the undo/redo buttons or keyboard shortcuts to undo or redo drawing actions.
- Click the "Clear" button to clear the canvas and start over.

## Code Structure

The codebase of this project follows a specific structure to organize the different components and functionality.

- `assets`: This directory contains SVG files used for icons and images in the project.
- `css`: This directory holds the `style.css` file, which contains custom styles for the application.
- `js`: This directory contains the JavaScript files for the project.
  - `DrawingManager.js`: This file contains the implementation of the `DrawingManager` class responsible for managing the drawing actions and history.
  - `main.js`: This file serves as the entry point for the application, where the initialization and setup occur.
  - `ToolSelector.js`: This file implements the `ToolSelector` class, responsible for handling tool selection.
  - `drawingModes`: This directory contains JavaScript files for different drawing modes, such as `CircleDrawer.js`, `LineDrawer.js`, etc. Each file represents a specific drawing mode.
  - `drawnShapes`: This directory contains JavaScript files for different shapes drawn on the canvas, such as `Circle.js`, `Line.js`, etc. Each file represents a specific shape.
  - `initializeButtons`: This directory includes JavaScript files for initializing various buttons and event handlers, such as `initClearCanvasButton.js`, `initColorSelection.js`, etc.

The code structure aims to separate different concerns and organize the components based on their functionality. This modular approach enhances code readability, maintainability, and reusability. By encapsulating related functionality within separate files and directories, the codebase becomes more structured and easier to navigate.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The initial guidance for creating this drawing app came from the article [Create a Drawing App with HTML and JavaScript](https://www.programonaut.com/create-a-drawing-app-with-html-and-javascript) by [Programonaut](https://www.programonaut.com/). The article provided valuable insights and served as a reference during the development process.
- Color Fill icon by boxicons from [SVG Repo](https://www.svgrepo.com/svg/334566/color-fill)
- Move icon by SVG Repo from [SVG Repo](https://www.svgrepo.com/svg/47365/move)
- Paint Palette and Brush icon by SVG Repo from [SVG Repo](https://www.svgrepo.com/svg/78385/paint-palette-and-brush)

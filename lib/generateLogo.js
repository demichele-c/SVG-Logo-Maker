
// Import the Circle, Triangle, and Square classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

// Define the generateSVG function which creates an SVG logo based on user inputs
// This function accepts an object with properties: text, textColor, shape, shapeColor, and filename
function generateSVG({ text, textColor, shape, shapeColor, filename }) {
    let svgShape;

    // Determine the shape class to use based on the shape input
    // Instantiate the corresponding shape object
    switch (shape) {
        case 'Circle':
            svgShape = new Circle();
            break;
        case 'Triangle':
            svgShape = new Triangle();
            break;
        case 'Square':
            svgShape = new Square();
            break;
    }

    // Set the color of the shape
    svgShape.setColor(shapeColor);

    // Create the SVG content as a string using template literals
    // Include the shape's SVG representation and the text with specified properties
    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${svgShape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    // Ensure the filename ends with .svg
    // If it doesn't, append .svg to the filename
    const finalFilename = filename.endsWith('.svg') ? filename : `${filename}.svg`;

    // Return an object containing the filename and the generated SVG content
    return { filename: finalFilename, content: svgContent };
}

// Export the generateSVG function so it can be used in other modules
module.exports = generateSVG;

const { Circle, Triangle, Square } = require('./shapes');

function generateSVG({ text, textColor, shape, shapeColor, filename }) {
    let svgShape;
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
    svgShape.setColor(shapeColor);

    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${svgShape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

    // Return both filename and content
    return { filename: filename.endsWith('.svg') ? filename : `${filename}.svg`, content: svgContent };
}

module.exports = generateSVG;
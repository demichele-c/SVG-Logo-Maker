
const { Circle, Triangle, Square } = require('./shapes');

function generateSVG({ text, textColor, shape, shapeColor }) {
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

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${svgShape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}

module.exports = generateSVG;
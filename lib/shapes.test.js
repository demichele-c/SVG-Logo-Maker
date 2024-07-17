// Import the Circle, Triangle, and Square classes from the shapes module
const { Circle, Triangle, Square } = require('./shapes');

// Test the render method of the Circle class
test('Circle render method', () => {
    // Create a new instance of the Circle class
    const shape = new Circle();
    // Set the color of the circle to blue
    shape.setColor('blue');
    // Check if the render method returns the expected SVG string for a blue circle
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

// Test the render method of the Triangle class
test('Triangle render method', () => {
    // Create a new instance of the Triangle class
    const shape = new Triangle();
    // Set the color of the triangle to blue
    shape.setColor('blue');
    // Check if the render method returns the expected SVG string for a blue triangle
    expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test the render method of the Square class
test('Square render method', () => {
    // Create a new instance of the Square class
    const shape = new Square();
    // Set the color of the square to blue
    shape.setColor('blue');
    // Check if the render method returns the expected SVG string for a blue square
    expect(shape.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="blue" />');
});
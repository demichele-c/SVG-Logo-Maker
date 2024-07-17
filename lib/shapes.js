// Define a base class named Shape
class Shape {
    // Constructor to initialize the shape with a color
    constructor(color) {
        this.color = color; // Store the color as a property of the shape
    }

    // Method to set or update the color of the shape
    setColor(color) {
        this.color = color;
    }
}

// Define a Circle class that extends the Shape class
class Circle extends Shape {
    // Method to render the SVG representation of a circle
    render() {
        // Return an SVG element for the circle with the specified color
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
    // Method to render the SVG representation of a triangle
    render() {
        // Return an SVG element for the triangle with the specified color
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Define a Square class that extends the Shape class
class Square extends Shape {
    // Method to render the SVG representation of a square
    render() {
        // Return an SVG element for the square with the specified color
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

// Export the Circle, Triangle, and Square classes for use in other modules
module.exports = { Circle, Triangle, Square };
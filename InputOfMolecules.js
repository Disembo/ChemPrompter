// Define a class named 'Rectangle'
class Rectangle {
    // Constructor to initialize the object with width and height
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create instances of the Rectangle class
const rectangle1 = new Rectangle(5, 3);
const rectangle2 = new Rectangle(7, 4);

// Use methods of the Rectangle class
console.log("Area of rectangle1:", rectangle1.calculateArea()); // Output: 15
console.log("Perimeter of rectangle2:", rectangle2.calculatePerimeter()); // Output: 22

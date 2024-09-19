class Calculator {
    // Method for addition
    add(a: number, b: number): number {
        return a + b;
    }

    // Method for subtraction
    subtract(a: number, b: number): number {
        return a - b;
    }

    // Method for multiplication
    multiply(a: number, b: number): number {
        return a * b;
    }

    // Method for division
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calculator = new Calculator();

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${calculator.add(num1, num2)}`);          // Output: 15
console.log(`Subtraction: ${calculator.subtract(num1, num2)}`);  // Output: 5
console.log(`Multiplication: ${calculator.multiply(num1, num2)}`); // Output: 50
console.log(`Division: ${calculator.divide(num1, num2)}`);        // Output: 2

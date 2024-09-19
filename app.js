var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Method for addition
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    // Method for subtraction
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    // Method for multiplication
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    // Method for division
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage:
var calculator = new Calculator();
var num1 = 10;
var num2 = 5;
console.log("Addition: ".concat(calculator.add(num1, num2))); // Output: 15
console.log("Subtraction: ".concat(calculator.subtract(num1, num2))); // Output: 5
console.log("Multiplication: ".concat(calculator.multiply(num1, num2))); // Output: 50
console.log("Division: ".concat(calculator.divide(num1, num2))); // Output: 2

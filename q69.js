//Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor); // Calculates the quotient and remainder
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder }; // Returns both in an object
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
console.log(divideAndRemainder(14, 3));
// It shows how many times 3 goes into 10, and what's left over.

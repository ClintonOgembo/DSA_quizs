function greet() {
    console.log("Hello World, i love coding");
}

greet();

// Function Declaration
function sum(y, x) {
    return y + x;
}

console.log(sum(4, 7))

// Function Expression
const Addition = function sum(y, x) {
    return y + x;
}

console.log(Addition(10, 7))
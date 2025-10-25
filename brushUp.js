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

// Arrow function
const Multiplication = (n, m) => n * m;
console.log(Multiplication(3, 4));

// parameters and args
function greetings(name) {
    console.log(`Hello ${name}`);
}
greetings("Clinton");

//default args
function Greet(name = "Guest") {
    console.log(`Hi ${name}`);
}
Greet();

// use of return
function getArea(radius) {
    return Math.PI * radius ** 2;
}

console.log(getArea(5));

//immediately invoked function expression
(function () {
    console.log("This runs immediately!");
})();

// This keyword
const player = {
    name: "Njeri",
    showThis() {
        console.log(this.name);
    }
};
player.showThis();

// Destructuring
const myArray = [10, 20, 30];
const [first, second, third] = myArray;
console.log(first, second, third);

// Object Destructuring
const palyer = {
    Name: "Faith",
    position: "striker",
    age: 23
};

const { Name, position, age } = palyer;
console.log(Name, position, age);

// destructuring in parameters
function printFirstTwo([first, second]) {
    console.log(first, second);
}

printFirstTwo(["A", "B", "C"]);

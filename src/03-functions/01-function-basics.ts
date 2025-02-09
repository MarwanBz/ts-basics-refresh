// basics of functions in typescript 

// function declaration 
function great(name: string): string {
    return `"Hey", ${name}`
}

// void functions => functions that return nothing 
function logMsg(msg: string): void { 
    console.log(msg);
}

// returning values from functions 
function subtract(a: number, b: number): number {
    return a - b;
}

// arrow functions => just like javascript arrow functions but with typescript
const add = (a: number, b: number): number => {
    return a + b;
}

// Short arrow function implicit return => means that the function automatically returns the results of  the expression without a return keyword
const multiply = (a: number, b: number): number => a * b;


function createUser(name: string, age?: number): string {
    if (age) {
        return `User ${name} is ${age} years old`;
    }
    return `User ${name}, age is unknown`;
}

// default parameters 
function welcome(name: string, greeting: string = "Hi") {
    return `${greeting}, ${name}`
}


// simple practical example
function calculateTotal(price: number, quantity: number = 1) {
    return price * quantity
} 

function formatUserInfo(name: string, email: string, phone?: string): string {
    let info = `name: ${name}\nemail: ${email}`
    if (phone) {
        info += `\nphone: ${phone}`
    }
    return info
} 

// calling the functions and testing them
console.log("\n=== basic Function examples ===\n");

console.log(great("Marwan"));
logMsg("this gonna logged in the console")

console.log("addition:", add(5, 3));
console.log("multiplication:", multiply(4, 2));


console.log(createUser("Marwan",26)); 
console.log(createUser("Ali",)); 

console.log(welcome("Marwan")); 
console.log(welcome("Marwan", "hi"));

console.log("total price:", calculateTotal(29.99, 2));

console.log("\nuser information:");

console.log(formatUserInfo("Marwan Baz", "marwan@baz.com"));

console.log("\nuser information with phone:");

console.log(formatUserInfo("Ali Bam", "ali@baz.com", "123-456-7890"));
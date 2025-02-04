// objects and interfaces in typescript 

// basic object type in typescript
type User = {
    name: string;
    age: number;
    address: string;
}

// using that type
const user: User = {
    name: "Marwan",
    age: 26,
    address: "Remotely on Planet Earth"
}


// basic interface 

interface Animal {
    name: string;
    type: string;
    makeSound(): void;
}

class Cat implements Animal {
    name: string;
    type: string = "cat";
    
    constructor(name: string) {
        this.name = name;
    }
    
    makeSound(): void {
        console.log("meow!");
    }
}

// optional properties 

interface UserProfile {
    username: string; //required
    email: string; //required
    phone?: string; //optional
    address?: string; //optional
} 

const profile: UserProfile = {
    username: "marwan_baz",
    email: "marwan@baz.com"
    // phone and address are optional so we can ignore them
}


// extending interfaces  
// its a feature just like like the same inhabitance in OOP
interface BasicBTN {
    text: string;
    onClick: ()=> void;
}

interface PrimaryBtn extends BasicBTN {
    color: "green" | "black" | "red";
    size: "sm" | "lg" | "xl"
}

// using the extend interface

const sumbitBtn: PrimaryBtn = {
    text: "sumbit",
    color: "red",
    size: "lg",
    onClick: ()=> console.log("my btn clicked")
}


// practical examples 
// creating ui form component

interface FormField {
    label: string;
    type: "text" | "email" | "password" | "number";
    value: string;
    required?: boolean;
    error?: string;
}

interface Form {
    title: string;
    fields: FormField[];
    onSubmit: () => void;
}

// login form 
const loginForm: Form = {
    title: "login",
    fields: [
        {
            label: "email",
            type: "email",
            value: "",
            required: true
        },
        {
            label: "password",
            type: "password",
            value: "",
            required: true
        }
    ],
    onSubmit: ()=> console.log("form has been submitted!")
}


// readonly properties * can't be changed after initialization

interface Config {
    readonly apiKey: string;
    readonly apiUrl: string;
}

const config: Config = {
    apiKey: "1234acb",
    apiUrl: "https://www.marwanbaz.dev"
};

// config.apiKey = "xyz789"; // error: cannot assign to 'apiKey' coz it is a readonly property


// interface with methods 
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

// implementing the calc
// the "implements" keyword ensures the class has all the methods and properties defined in the interface
class BasicCalculator implements Calculator {
    add(a: number, b: number): number { return a + b; }
    subtract(a: number, b: number): number { return a - b; }
    multiply(a: number, b: number): number { return a * b; }
    divide(a: number, b: number): number { return a / b; }
}

// calling the functions and testing them

console.log("\n=== Objects and Interfaces Examples ===\n");

// User example
console.log("User:", user);

// Dog example
const myCat = new Cat("DumbCat");
console.log("Cat:", myCat);
myCat.makeSound();

// Button example
console.log("Submit Button:", sumbitBtn);

// Form example
console.log("Login Form:", loginForm);

// Calculator example
const calc = new BasicCalculator();
console.log("Calculator Results:");
console.log("Addition:", calc.add(5, 3));
console.log("Subtraction:", calc.subtract(10, 4));
// type infers in typescript 

// basic type Inference 

let msg = "Hello typescript" // TypeScript infers this as: string
const count = 43  // TypeScript infers this as: number
const isActive = false // TypeScript infers this as: boolean

// array type inference 
let numbers = [1, 2, 3, 4, 5, 6, 7] // typeScript infers this as: number[]
let mixedValues = [2, "Value", true] // typeScript infers this as: (string | number | boolean)[]

// object type inference 

let something = {
    name: "Marwan",
    age: 26,
    isAdmin: false,
} //typescript infers types for each property 

// function Return Type Inference
function add(a: number, b: number) {
    return a+b //typescript infers return type as : number
}

// when using inference is not enough for the use case 
//! example 1: Empty Arrays1- empty arrays coz without explicit typing, typeScript will assume the array can hold any type of value (any[]), which defeats the purpose of using TypeScript for type safety.
// let scores = [];
// The initial value is an empty array [].
// TypeScript cannot infer what type of elements the array will hold because there are no elements to analyze.

let scores: number[] = []; // 5. When Inference Isn't Enough
 // need explicit type, or it's inferred as any[]

// example 2: future values | the user going to input 
let userInput: string;        // Need explicit type for variables declared without initialization
userInput = "hello";

// complex object inference 

let employee = {
    id: 191,
    details: {
        firstName: "Mar",
        lastName: "baz",
        age: 26,
    },
    skills: ["typescript", "nextJs", "Javascript"]
    // typescript infers==guess the nested types
}

// context based type inference 
// typescript inference parameter type in forEach
employee.skills.forEach(skill => {
    console.log(skill.toLocaleUpperCase()); //typescript knows "skill" is string type
})

// union type inference 
let dynamicValue = Math.random() > 0.5 ? "Hello" : 12; // string | number

// best practices for type inference  with examples

// bad practice => unnecessary type annotation 
let personName: string = "Marwan";    // type annotation not needed here coz typescript is smart :D
// good practice
let pName = "Marwan" // Type is inferred as string


// bad way to use explicit types 
interface UserPreferences {
    theme: "light" | "dark";
    fontSize: number;
}

// good practice 
let preferences: UserPreferences = {
    theme: "dark",
    fontSize: 14   
}


// example : API response  
interface ApiResponse<T> {
    data: T;
    status: number;
    msg: string;
}

// type inference in async functions 
async function fetchUserData() {
    const response: ApiResponse<typeof employee> = {
        data: employee,
        status: 200,
        msg:"success"
    }
    return response
}

// calling the functions and testing them
console.log("inferred Types Examples:");
console.log("message type:", typeof msg);
console.log("numbers array:", numbers);
console.log("mixed array:", mixedValues);
console.log("user object:", something);
console.log("add function result:", add(5, 3));
console.log("dynamic value:", dynamicValue);
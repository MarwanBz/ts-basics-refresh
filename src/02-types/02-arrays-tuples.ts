// arrays and tuples in typescript 

// arrays
// tow ways to declare arrays in TS
// 1
let number: number[] = [1, 2, 4, 5, 6, 7]
// 2
let marwan: Array<string> = ["Marwan", "Baz", "web dev"]

// multi type arrays  => union | type
let mixedArray: (number | string)[] = [1, "two", 3, "four"];

// array with multiple specific types 
let userInfo: (string | number | boolean)[] = ["John", 42, true];

// readonly arrays | to prevent from modify 
const readonlyArray: ReadonlyArray<number> = [1, 4, 6]
// readOnlyArray[0] = 5; // error: cannot modify readonly array
// readOnlyArray.push(4); // error: cannot modify readonly array


// tuples => | tuples are array like array but with a fixed number of elements and specific order
let thing: [string, number] = ["Marwan", 30];
// thing = [30, "Marwan"]; // error: wrong types order
// thing = ["Marwan", 30, true]; // error: too many elements

// optional tuple elements with ? mark and they must come last
let human: [string, number, boolean?] = ["Jane", 25];
human = ["Jane", 25, true]; // 

// also tuple can have the ...rest operator of elements 
let developer: [string, number, ...string[]] = ["Marwan", 27, "TypeScript", "JavaScript", "React"];

//! practical examples 

// manage tasks examples  
type TaskStatus = "pending" | "completed" | "failed"
interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

let tasks: Task[] = [
    { id: 1, title: "Learn TypeScript", status: "completed" },
    { id: 2, title: "Build Project", status: "pending" }
];

// represent of CSV data
type CSVRow = [string, number, boolean]

let csvData: CSVRow[] = [
    ["marwan", 26, true],
    ["Aye", 21, true],
    ["Mo", 36, false]
];

// array methods with type safety and type script provide type safety 


// map method: typeScript infers the correct return type
const numberStrings: string[] = number.map(n => n.toString());

// filter method: typeScript maintains the type of filtered elements
const evenNumbers: number[] = number.filter(n => n % 2 === 0);

// reduce method: typeScript can infer complex return types
const sum: number = number.reduce((acc, curr) => acc + curr, 0);


// advance tuple patterns for specific use case 

// tuple for representing RGB colors
type RGB = [number, number, number];
const color: RGB = [255, 128, 0];

// tuple for representing API responses
type APIResponse<T> = [number, string, T]; // [status, message, data]
const response: APIResponse<string[]> = [200, "Success", ["data1", "data2"]];


// calling the functions and testing them

console.log("\n=== arrays and tuples examples ===\n");

// Array operations
console.log("original numbers:", number);
console.log("even numbers:", evenNumbers);
console.log("sum of numbers:", sum);

// Tuple operations
console.log("thing tuple:", thing);
console.log("developer info:", developer);

// CSV data processing
console.log("CSV data:");
csvData.forEach(([name, age, subscribed]) => {
    console.log(`${name} is ${age} years old and ${subscribed ? "is" : "is not"} subscribed.`);
});

// Task management
console.log("\ntasks:");
tasks.forEach(task => {
    console.log(`${task.title} - ${task.status}`);
});

// RGB Color
console.log("\nRGB color:", `rgb(${color.join(", ")})`);

// API Response handling
console.log("\nAPI response:", {
    status: response[0],
    message: response[1],
    data: response[2]
});
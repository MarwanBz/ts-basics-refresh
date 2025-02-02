// Basics of Typescript so let's have fun! 🏊 

let firstName: string = "Marwan"  // this syntax tells the var what type it should be in this way the var is type of string 
let age: number = 26 
let score: number = 119.1

let isMarried: boolean = false

const lastName = "Baz" //typescript is smart so it inference | تستنتج  this as a string


//  basic function with type annotations
function greet(name: string): string {
    //this annotation | this word means => "note" tells the function what type to expect so it's a type of string. also (name: string): string this is a function return type which tell the function what type it should return
    return ` Hello ${name} welcome to the world of TS🎩`
}


// array type 
const num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const names: string[] = ["Marwan", "Mohammed", "Ali"]

// object type 
let person: {
    name: string;
    age: number;
} = {
    name: "Marwan",
    age: 26
}

// calling the functions and testing them

console.log("Name:", firstName);
console.log(greet(firstName));
console.log("Age:", age);
console.log("Is Married?", isMarried);
console.log("Numbers:", num);
console.log("Person:", person);
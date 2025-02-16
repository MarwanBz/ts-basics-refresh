//implementing interfaces in typescript
// Interfaces that define function signatures

import { Interface } from "readline";

// function interfaces
// single signature
interface Vallidator {
    (value: string): boolean;
}

// multiple signatures
interface Parser {
    (value: string): string;
    (value: number): number;
}

// implementing function interfaces
const numberValidator: Vallidator = (value: string): boolean => {
    return !isNaN(Number(value));
}

const parser: Parser = (value: string | number): any => {
    if (typeof value === "string") {
        return Number(value);
    } 
    return String(value);
} 

//indexable interfaces 
// interfaces that define index signatures 

// string index signatures
interface StringDictionary {
    [key: string]: string;
}

//number index signature
interface NumberArray {
    [index: number]: string;
}

// mixed index signatures
interface Mixed {
    [key: string]: number | string;
    length: number;
}

// using indexable interfaces 
const dictionary: StringDictionary = {
    en: "English",
    ar: "Arabic",
    es: "Spanish"
}

const stringArray: NumberArray = ["one", "two", "three"];

const mixed: Mixed = {
    length: 3,
    width: 100,
    unit: "pixels"
}

// callable interfaces and constructable interfaces
// Interfaces for function objects and constructors

interface CallableFunction { 
    (arg: string): void;
    name: string;
}

// constructor interface 
interface ConstructableFunction {
    new(value: string): { value: string };
}

// using callable interfaces 
const namedFunction: CallableFunction = (arg: string) => {
    console.log(arg);
}

namedFunction.name = "Logger";

// hybrid types 
// interfaces that combine different types

interface Counter {
    (): number; //function 
    count: number; //property
    increment(): void; //method
    reset(): void; //method
}

// using the hybrid interfaces

function createCounter(): Counter {
    const counter = (() => counter.count) as Counter;
    counter.count = 0;
    counter.increment = () => { counter.count++; };
    counter.reset = () => { counter.count = 0; };
    return counter;
}


// call the functions and testing 
console.log("\n=== interface implementation examples ===\n");

// function interfaces

console.log("number validator:", numberValidator("123"));
console.log("parser:", parser("123"), parser(456));

// indexable types
console.log("\ndictionary:", dictionary["en"]);
console.log("array:", stringArray[0]);
console.log("mixed:", mixed.length, mixed.width);

// callable interface
console.log("\ncallable function:");
namedFunction("Hi");
console.log("function name:", namedFunction.name);


// hybrid interface
const counter = createCounter();
counter.increment();
counter.increment();
console.log("\ncounter value:", counter());
counter.reset();
console.log("counter after reset:", counter());
// advance primitive types in typescript

//string literal types 
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
const Button: ButtonVariant = "destructive"
// const secondaryBtn : ButtonVariant = "transparent" //error: typescript will scream at you this :  '"transparent"' is not assignable to type 'ButtonVariant'


// numeric types 
const decimal: number = 9
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;
const big: bigint = 100n;

// boolean with type predicates 
function isString(value: any): value is string {
    return typeof value === "string"; //useful for validating user input
}

//symbol type 
const sym1 = Symbol("key")
const sym2 = Symbol("key")
// console.log(sym1 === sym2); // false - symbols are always unique

//void type 

function logMsg(msg: string): void { // void type  => functions that return void. functions that do not return a value => usage : used in functions that are meant to perform such as logging messages, modifying global variables, or interacting with user interfaces.
    console.log(msg);
    // return "hello"; // error: type 'string' is not assignable to type 'void'

}


// never type 
// never type represents function that does not return to the caller, either due to an error being thrown or because it runs indefinitely.
function throwError(msg: string): never {
    throw new Error(msg)
}

function infiniteLoop(): never {
    while (true) {}
}


// null and undefined
let nullableString: string | null = "hello"
nullableString = null 

let undefinedNumber: number | undefined;
console.log(undefinedNumber); //undefined

//  type assertions with primitives
let someValue: unknown = "this has a string"
let strLength: number = (someValue as string).length;
// alternative syntax
let strLength2: number = (<string>someValue).length;

// template literal types 
type EmailLocal = "ar" | "en" | "es"
type EmailType = "welcome" | "goodbye"
type EmailTemplate = `${EmailType}_${EmailLocal}`

let emailTemplate:EmailTemplate = "welcome_ar" //no error
// let invalidTemplate: EmailTemplate = "welcome_de"; // Error

//! practical examples 
// email validation
type Email = `${string}@${string}.${string}`;
let userEmail: Email = "user@example.com"; //no error
// let invalidEmail: Email = "invalid-email"; // Error

// phone number format 
type PhoneNumber = `${number}${number}${number}-${number}${number}${number}-${number}${number}${number}${number}`;
let phone: PhoneNumber = "123-456-7890";


// calling the functions and testing them

console.log("\n=== primitive types examples ===\n");

// string literal type
console.log("Button Variants:", Button);

// number types
console.log("Number Types:", {
    decimal,
    hex,
    binary,
    octal,
    bigint: big
});

// type predicate usage
const values: any[] = ["hello", 42, true];
const strings = values.filter(isString);
console.log("strings only:", strings);

// symbol usage
const symbolKey = Symbol("myKey");
const obj = {
    [symbolKey]: "value"
};
console.log("symbol property:", obj[symbolKey]);

// template literal type
const emails: EmailTemplate[] = ["welcome_en", "goodbye_ar", "welcome_es"];
console.log("valid email templates:", emails);
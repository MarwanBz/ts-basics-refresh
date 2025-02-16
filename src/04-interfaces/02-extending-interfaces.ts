// extending interfaces in typescript
// basic interface extension 
interface Base {
    id: string;
    name: string;
}

interface Extended extends Base {
    description: string;
}

// using the extended interface
const item: Extended = {
    id: "1",
    name: "Item 1",
    description: "I am an extended item number 1"
};

// extending multiple interfaces 
interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
}

interface Versioned {
    version: number;
    previousVersion?: number;
}

interface Document extends Base, Timestamped, Versioned {
    content: string;
}

// using multiple extensions
const doc: Document = {
    id: "doc123",
    name: "document 1",
    content: "hey, world",
    createdAt: new Date(),
    updatedAt: new Date(),
    version: 1,
}

// extending with new field requirements 
interface Optional {
    field?: string; //optional field in Base
}

interface Requireded extends Optional {
    field: string; //required in extended
}

const required: Requireded = {
    field: "value",
}

// interfaces merging 
interface Config {
    name: string;
}

interface Config {
    version: string;
}

const config: Config = {
    name: "App Config",
    version: "1.0.0"
}

// calling the interfaces and testing them

console.log("\n=== extended interfaces examples ===\n");

// basic extension
console.log("extended item:", item);

// multiple extensions
console.log("\ndocument:", doc);

// required fields
console.log("\nrequired fields:", required);

// merged interface
console.log("\nmerged config:", config);
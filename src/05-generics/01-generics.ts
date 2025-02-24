// generics in typescript 

// generic types and functions

function identity<T>(value: T): T {
    return value
}

// using the generic function
const numberIdentity = identity<number>(42);
const stringIdentity = identity<string>("Hey");

// generic interfaces 
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 1234 };
const stringBox: Box<string> = { value: "hey" };

// generic classes => means you can create classes that can work with different types
class GenericList<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T {
        return this.items[index]
    }

    getAll(): T[] {
        return this.items
    }
}

// using the generics class 
const numberList = new GenericList<number>();
numberList.add(2)
numberList.add(5)
console.log("number list: ", numberList.getAll());

const stringList = new GenericList<string>()
stringList.add("M")
stringList.add("A")
console.log("string list: ", stringList.getAll());

// generic constraint 
// restricting types that can be used with genetics 

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(`length : ${item.length}`);    
}

// using the function with different types
logLength("Hola")
logLength([1,3,4])
logLength({ length: 10})

//  built in utility types 
// using typescript's built in utility types

interface User {
    id: number;
    name: string;
    email: string;
}

// partial => makes all properties optional
const partialUser: Partial<User> = { name: "Marwan" };

// readonly => makes all properties readonly
const readonlyUser: Readonly<User> = {
    id: 1,
    name: "Marwan",
    email: "marwan@gg.com"
}

// record => creates a type with a specific keys 
const userRoles: Record<string, User> = {
    admin: { id: 1, name: "Admin User", email: "marwan@gmail.com" },
    user: { id: 2, name: "User", email: "marwan@gmail.com" }
}

// calling the testing the generics

console.log("\n=== generics examples ===\n");

// Identity function
console.log("identity of number:", numberIdentity);
console.log("identity of string:", stringIdentity);

// Generic Box
console.log("number Box:", numberBox);
console.log("string Box:", stringBox);

// Generic List
console.log("number List:", numberList.getAll());
console.log("string List:", stringList.getAll());

// Log length
logLength("Hey code!");
logLength([1, 2, 3, 4, 5]);

// Built-in utility types
console.log("partial User:", partialUser);
console.log("readonly User:", readonlyUser);
console.log("user Roles:", userRoles);

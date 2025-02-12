// function overloads in typescript => means the same function name but with different parameters types or number of parameters
// basic function overloads 

function display(value: string): void;
function display(value: number): void;

// using the functions
function display(value: string | number): void {
    if (typeof value === "string") {
        console.log("string:", value.toUpperCase());
    } else {
        console.log("number:", value.toFixed(2));
    }
}

// overloads with different parameters 
function createUser(id: number): { id: number };
function createUser(name: string, age: number): { name: string, age: number }

// using the functions
function createUser(idOrName: number | string, age?: number): any {
    if (typeof idOrName === "number") {
        return {id: idOrName}
    } else {
        return { name: idOrName, age: age! };
    }
}

interface User {
    id: number;
    name: string;
    email: string;
}

function searchUsers(id: number): User;
function searchUsers(email: string): User;
function searchUsers(query: string, type: "name" | "email"): User[];

// using the functions 
function searchUsers(
    query: number | string,
    type?: "name" | "email"
): User | User[] {
    const users: User[] = [
        { id: 1, name: "Marwan", email: "marwan@gg.com" },
        { id: 2, name: "Ali", email: "Ali@gg.com" },
    ];
    
    if (typeof query === "number") {
        return users.find(user => user.id === query)!;
    } else if (type) {
        return users.filter(user => user[type].includes(query));
    } else {
        return users.find(user => user.email === query)!;
        
    }
}

// overloaded event handler example

interface MouseEvent { 
    type: "mouse";
    x: number;
    y: number;
}
 
interface KeyboardEvent { 
    type: "keyboard";
    key: string;
}
 
interface TouchEvent {
    type: "touch";
    touches: number;
    x: number;
    y: number;
}


// overload signatures
function handleEvent(event: MouseEvent): void;
function handleEvent(event: KeyboardEvent): void;
function handleEvent(event: TouchEvent): void;

//using them 

function handleEvent(
    event: MouseEvent | KeyboardEvent | TouchEvent
): void {
    switch (event.type) {
        case "mouse":
            console.log(`mouse at ${event.x}, ${event.y}`);
            break;
        case "keyboard": 
            console.log(`key pressed: ${event.key}`);
            break;
        case "touch":
            console.log(`${event.touches} finger touch at (${event.x}, ${event.y})`);
            break;
    }
}

// calling the function and testing it
console.log("\n=== function overload examples ===\n");

display("hello");  
display(42);       


console.log("\ncreate user function:");
console.log(createUser(1));             
console.log(createUser("Marwan", 20));     


console.log("\nsearch users:");
console.log("search by ID:", searchUsers(2));
console.log("search by email:", searchUsers("marwan@gg.com"));
console.log("search by name:", searchUsers("Marwan", "name"));


console.log("\nevent handler:");
handleEvent({ type: "mouse", x: 100, y: 200 });
handleEvent({ type: "keyboard", key: "Enter" });
handleEvent({ type: "touch", touches: 2, x: 100, y: 200 });



// function types in typescript 
// basic function type
type GreetFunction = (name: string) => string;

const SayHey: GreetFunction = (name) => {
    return `Hey ${name}`
}

// function type with multiple parameters
type MathOpration = (x: number, y: number) => number;

// using the math types 

const add: MathOpration = (x, y) => x + y;
const subtract: MathOpration = (x, y) => x - y;
const multiply: MathOpration = (x, y) => x * y;
const divide: MathOpration = (x, y) => x / y;


// function type with optional parameters
type SearchFunction = (query: string, limit?: number, offsset?: number) => string[];

const search: SearchFunction = (query, limit = 10, offset = 0) => {
    return [`results 1 for: ${query}`, `results 2 for: ${query}`];
}


// callback function types
type SuccessCallback = (data: any) => void;
type ErrorCallback = (error: any) => void;

function fetchData(
    url: string,
    onSuccess: SuccessCallback,
    onError: ErrorCallback
): void {
    // mimic API call 
    try {
        const data = { id: 17318, name: "Marwan Baz" };
        onSuccess(data);
    } catch (error) {
        onError(error as Error);
    }
}


// practical example 
// web event handlers

type EventType = "click" | "hover" | "keydown" | "focus";

type EventHandler = (event: {
    type: EventType,
    target: string,
    timestamp: number
}) => void;

// event class
class EventSystem {
    private handlers: Map<EventType, EventHandler[]> = new Map();
    

    // add event listener
    addHandler(type: EventType, handler: EventHandler): void {
        if (!this.handlers.has(type)) {
            this.handlers.set(type, []);
        }
        this.handlers.get(type)?.push(handler);
    }


    //trigger event
    triggerEvent(type: EventType, target: string): void {
        const handlers = this.handlers.get(type) || [];
        const event = {
            type,
            target,
            timestamp: Date.now()
        }
        
        handlers.forEach(handler => handler(event));
    }
}


// calling the functions and testing them
console.log("\n=== function types examples ===\n");

console.log("greeting", SayHey("Marwan"));


console.log("math operations");
console.log("add:", add(5, 3));
console.log("subtract:", subtract(10, 4));
console.log("multiply:", multiply(6, 2));
console.log("divide:", divide(12, 3));


console.log("\nsearch results:");
console.log(search("typescript"));
console.log(search("javascript", 5));



// event
const events = new EventSystem();

events.addHandler("click", (event) => {
    console.log(`click event on ${event.target} at ${event.timestamp}`);
});

events.addHandler("hover", (event) => {
    console.log(`hover event on ${event.target} at ${event.timestamp}`);
});


events.triggerEvent("click", "button");
events.triggerEvent("hover", "icon");


//callback
fetchData(
    "https://yourapi.com/",
    (data) => console.log("Success:", data),
    (error) => console.log("Error:", error.message)
);
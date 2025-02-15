// interfaces basics in typescript 
// basic interface definition

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// using the interface
const user: User = {
    id: 1,
    name: "Marwan",
    email: "marwan@gg.com",
    age: 26
}

// optional properties and readonly properties
interface UserProfile {
    readonly id: number;
    name: string;
    email: string;
    age?: number;
    bio?: string;
    readonly createdAt: Date;
}

// using optional properties

const profile: UserProfile = {
    id: 1,
    name: "Marwan",
    email: "marwan@gg.com",
    // age: 26, //optional
    bio: "Software Engineer",
    createdAt: new Date()
}

// interface with methods
interface UserActions {
    updateName(newName: string): void;
    updateEmail(newEmail: string): void;
    getFullInfo(): string;
}

// using interface with methods
class UserImpl implements UserActions { 
    constructor(private name: string, private email: string) {
    }
    
    updateName(newName: string): void {
        this.name = newName;
    }
    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
    getFullInfo(): string {
        return `${this.name} ${this.email}`;
    }
}
 
// index signature =>  interfaces for objects with dynamic properties

interface StringDictionary { 
    [key: string]: string;
}
 
const translation: StringDictionary = {
    hello: "Hello",
    goodbye: "Goodbye",
    thankyou: "Thank you"
}

interface UserPreferences { 
    [settings: string]: string | number | boolean;
}

const preferences: UserPreferences = {
    theme: "dark",
    fontSize: 14,
    notifications: true,
    language: "en",
}

// nested interfaces
interface Address { 
    street: string;
    city: string;
    country: string;
    postalCode: string;
}

interface Contact {
    email: string;
    phone: string;
    address: Address;
}

interface CompleteUser {
    id: number;
    name: string;
    contact: Contact;
    preferences: UserPreferences;
}

// using nested interfaces
const completeUser: CompleteUser = {
    id: 1,
    name: "Marwan",
    contact: {
        email: "marwan@gg.com",
        phone: "123-456-7890",
        address: {
            street: "123 Main St",
            city: "Mukalla",
            country: "Yemen",
            postalCode: "12345"
        }
    },
    preferences: {
        theme: "light",
        fontSize: 14,
        notifications: true,
    }
};

// calling the interfaces and testing them
console.log("\n=== interface examples ===\n");
console.log("User:", user);

console.log("\nProfile:", profile);

profile.age = 25; // we can add optional properties later

console.log("Updated profile:", profile);

const userActions = new UserImpl("Marwan", "marwan@gg.com");

console.log("\nuser actions:");

console.log("initial:", userActions.getFullInfo());

userActions.updateName("Marwan Baz");

console.log("after update:", userActions.getFullInfo());

// index signatures

console.log("\ntranslations:", translation);

translation["welcome"] = "welcome"; // adding new translation

console.log("updated translation:", translation);

// nested interfaces
console.log("\ncomplete user:", completeUser);

console.log("user address:", completeUser.contact.address);

console.log("user preferences:", completeUser.preferences);




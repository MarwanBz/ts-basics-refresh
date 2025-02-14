// arrow functions in typescript => just like javascript arrow functions but with type safety

const greetMom = (name: string): string => `Hey, ${name}`

const calculateTheTotal = (items: number[]): number => {
    const sum = items.reduce((total, item) => total + item, 0)
    return sum * 1.1
} 
// re learn "this" keyword in arrow functions and regular functions
class Counter {
    count: number = 0;
    
    // this in regular function so the context of this can change
    increment() {
        this.count += 1;
    }

    delayIncrement() {
        setTimeout(function(this: any) {
            // "this" is undefined here
            // this.count += 1; // this would cause an error => coz 
            console.log("regular function this is: ", this);
            
        },1000)
    }

    // arrow function "this" is preserved 
    delayIncrementArrow() {
        setTimeout(()=> {
            this.count += 1; // this works here 
            console.log("count after arrow increment: ", this.count);
            
        },1000)
    }
}

// practical example  shipping cart
interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

class ShippingCart {
    private items: Product[] = [];
   

    // arrow fuc as class property
    addItem = (product: Product):void => {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            this.items.push(product);
        }
        
        console.log(`added ${product.name} to cart`);
    }

    // arrow function to filter items under price
    getItemsUnderPrice = (maxPrice: number): Product[] => this.items.filter(item => item.price <= maxPrice);
    
    // arrow function to get total price of all items in cart
    getTotalPrice = (): number => this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    
    // arrow function with discount
    applyDiscount = (percentage: number): number => {
        const total = this.getTotalPrice();
        const discount = total * (percentage / 100);
        return total - discount;
    };

    // your cart summery 
    getCartSummery = (): string => {
        const total = this.getTotalPrice();
        const itemCount = this.items.reduce((count, item) =>
            count + item.quantity, 0);
        
        return `your cart has ${itemCount} items for a total of ${formatPrice(total)}`
    }

    
}

    const formatPrice = (price: number): string => `$${price.toFixed(2)}`;


const products: Product[] = [
    { id: "1", name: "Laptop", price: 999.99, quantity: 1 },
    { id: "2", name: "Mouse", price: 29.99, quantity: 2 },
    { id: "3", name: "Keyboard", price: 59.99, quantity: 1 }
];

// array methods with arrow function 
// map method => transform array items
const productNames = products.map(p => p.name);

// filter method => get items matching condition
const expensiveProducts = products.filter(p => p.price > 50);

// reduce method => calculate total
const totalQuantity = products.reduce((total, p) => total + p.quantity, 0);

// sort method => order items by price
const sortByPrice = products.sort((a, b) => a.price - b.price);

// call the functions and test them
console.log("\n=== shopping cart examples ===\n");

// Create cart and add items
const cart = new ShippingCart();
cart.addItem({ id: "1", name: "laptop", price: 999.99, quantity: 1 });
cart.addItem({ id: "2", name: "mouse", price: 29.99, quantity: 2 });

// Test cart functions
console.log("\ncart Summary:", cart.getCartSummery());
console.log("items under $100:", cart.getItemsUnderPrice(100));
console.log("total with 10% discount:", formatPrice(cart.applyDiscount(10)));

// Array operations results
console.log("\narray methods with arrow function :");
console.log("product names:", productNames);
console.log("expensive products:", expensiveProducts);
console.log("total quantity:", totalQuantity);
console.log("products sorted by price:", 
    sortByPrice.map(p => `${p.name}: ${formatPrice(p.price)}`));

// test this context
const counter = new Counter();
console.log("\ntesting 'this' context:");
counter.increment();
console.log("direct increment:", counter.count);
counter.delayIncrementArrow();
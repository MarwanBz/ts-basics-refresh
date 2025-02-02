// E-commerce product management examples

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}

interface CartItem {
    product: Product;
    quantity: number;
}

// product database it have an array of products
const inventory: Product[] = [
    {
        id: 1,
        name: "iPhone 15",
        price: 999.99,
        inStock: true,
        categories: ["electronics", "phones", "apple"]
    },
    
    {
        id: 2,
        name: "Samsung Galaxy S25",
        price: 899.99,
        inStock: true,
        categories: ["electronics", "phones", "samsung"]
    }
]

// shopping cart 
let shoppingCart: CartItem[] = []

// user profile 

interface UserProfile {
    id: number;
    email: string;
    preferences: {
        theme: "light" | "dark";
        notifications: boolean;
        language: string;
    };
    orderHistory: {
        orderId: string;
        date: Date;
        total: number;
    }[];
}

// user example 
const user: UserProfile = {
    id: 123,
    email: "john@example.com",
    preferences: {
        theme: "dark",
        notifications: true,
        language: "en"
    },
    
    orderHistory: [
        {
            orderId: "ORD-2023-001",
            date: new Date("2023-01-15"),
            total: 1299.99
        }
    ]
}

// utils functions
function addToCart(productId: number, quantity: number): void {
    const product = inventory.find(p => p.id === productId);
    if (product && product.inStock) {
        shoppingCart.push({ product, quantity });
        console.log(`Added ${quantity} ${product.name}(s) to cart`);
    } else {
        console.log("Product not available");
    }
}

function calculateTotal(cart: CartItem[]): number {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

// search functionality to search products
function searchProducts(query: string): Product[] {
    return inventory.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
    );
}

// using the utils functions examples
addToCart(3, 2) //add 2 samsung s25 to cart 
// calculate total of cart
console.log("cart total: $", calculateTotal(shoppingCart));

// search products
console.log("search results for 'phone':", searchProducts("phone"));

//handel date 
const orderDates: Date[] = [
    new Date("2023-01-01"),
    new Date("2023-02-15"),
    new Date("2023-03-30")
];

// array methods filter and mapping 
const inStockProducts = inventory.filter(product => product.inStock)

const productNames = inventory.map(product => product.name)

// price calculating with discount
function calculateDiscountedPrice(price: number, discountPercentage: number): number {
    return price * (1 - discountPercentage / 100);
}

// managing product categories 
const allCategories  = new Set(
    inventory.flatMap(product => product.categories)
);

// calling the functions and testing them

console.log("in stock products:", inStockProducts);
console.log("all product names:", productNames);
console.log("All categories:", Array.from(allCategories));
console.log("iPhone with 10% discount:", 
    calculateDiscountedPrice(inventory[0].price, 50));
// function parameters in typescript 
// required parameters
function createPost(title: string, content: string): void {
    console.log(`creating post: ${title}`);
    console.log(`content: ${content}`);
}

// optional parameters => using ? after the parameter type
function updateProfile(name: string, age?: number, bio?: string):void {
    console.log(`updating name to: ${name}`);
    if (age) console.log(`age: ${age}`);
    if (bio) console.log(`bio: ${bio}`);
}

// default parameters 
function configureApp(theme: string = "dark", fontSize: number = 16, language: string = "ar"): void { 
    console.log(
        `App config with: theme: ${theme}, fontSize: ${fontSize}px, language: ${language}`
    );
}
 
// rest parameters => using ... before the parameter name
function addToCart(userId: string, ...items: string[]): void {
    console.log(`adding items to cart for user: ${userId}`);
    items.forEach(item => console.log(`- ${item}`));    
}


// parameters destructuring 
interface UserConfig {
   name: string;
    email: string;
    preferences?: {
        theme?: string;
        notifications?: boolean;
    };
}

function setupUser({
    name,
    email,
    preferences = {theme: "dark", notifications: true}
}: UserConfig): void {
    console.log(`setting up user: ${name} (${email})`);
    console.log('preferences:', preferences);
}

// practical examples
// example 1
function addItem(
    productId: string,
    quantity: number = 1,
    options?: {
        gift?: boolean;
        express?: boolean;
    }
): void {
    console.log(`adding ${quantity}x  product: ${productId}`);
    if (options?.gift) console.log("will be wrapped as a gift");
    if (options?.express) console.log("will be shipped express");   
}

//example 2

function sendEmail(
    to: string,
    subject: string,
    content: string,
    ...attachments: string[]
): void {
    console.log(`sending email to: ${to}`);
    console.log(`subject: ${subject}`);
    console.log(`content: ${content}`);
    if (attachments.length > 0) console.log(`attachments: ${attachments}`);
}

// calling the functions and testing them
console.log("\n=== parameters examples ===\n");

console.log('1. creating a post:');
createPost('typeScript tutorial', 'learning about function parameters...');

updateProfile('Marwan'); 
updateProfile('Marwan', 25); 
updateProfile('Ali', 30, 'typeScript wizard');

configureApp(); 
configureApp('dark'); 
configureApp('dark', 20, 'ar'); 

addToCart('user123', 'laptop', 'mouse', 'keyboard');


setupUser({
    name: 'Marwan Baz',
    email: 'marwan@baz.com',
    preferences: {
        theme: 'dark',
        notifications: false
    }
});

addItem('laptop-123'); 
addItem('phone-456', 2); 
addItem('watch-789', 1, { gift: true, express: true }); 

sendEmail(
    'marwan@baz.com',
    'Welcome!',
    'Welcome to TypeScript',
    'welcome.pdf',
    'guide.pdf'
);
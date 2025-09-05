
// ------------------------------
// TypeScript Compiler (tsc) Notes
// ------------------------------

// TypeScript kya hai?
// Ye JavaScript ka upgraded version hai jisme "types" ka concept hota hai.
// Lekin Browser aur Node.js TypeScript ko samajh nahi sakte,
// is liye hume compiler (tsc) chahiye jo TypeScript ko JavaScript me convert kare.



//  tsc (TypeScript Compiler) kya karta hai?
// 1. TypeScript code ko JavaScript me badalta hai
// 2. Errors check karta hai (agar types galat use hui ho)
// 3. Code ko safe banata hai run karne se pehle










// ------------------------------
// Example 1: Simple TypeScript Code
// ------------------------------

let message: string = "Hello TypeScript";
console.log(message);

// ------------------------------
// Example 2: Error Checking
// ------------------------------

// Agar aap type ke against koi value doge to tsc error dega
let age: number = 20;
// age = "twenty"; //  error: Type 'string' is not assignable to type 'number'

// ------------------------------
// Kaise chalana hai (Step by Step)
// ------------------------------

// Step 1: Compile karo (TypeScript → JavaScript)
// terminal me likho:
//    tsc index.ts

// Step 2: Run karo (JavaScript code execute hoga)
// terminal me likho:
//    node index.js

// Output:
// Hello TypeScript

// ------------------------------
// Easy Summary
// ------------------------------
// TypeScript = JavaScript + Types
// tsc = Translator (TypeScript → JavaScript)

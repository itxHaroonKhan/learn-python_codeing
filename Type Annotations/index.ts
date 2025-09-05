
// ------------------------------
// Type Annotations in TypeScript
// ------------------------------

// 🔹 Type Annotation ka matlab hai khud type likhna variable ya function ke sath
// Syntax: let variableName: type = value;

// ------------------------------
// Example 1: Simple Variables
// ------------------------------
let age: number = 20;          // sirf number allow hai
let num: string = "Ali";      // sirf string allow hai
let isAdmin: boolean = true;   // sirf true/false allow hai

// ❌ error example:
// age = "twenty";  // Type 'string' is not assignable to type 'number'

// ------------------------------
// Example 2: Without Annotation (Type Inference)
// ------------------------------
let city = "Karachi"; // TypeScript khud samajhta hai ke ye string hai
city = "Lahore";      // ✅ theek hai
// city = 123;        // ❌ error: number string me assign nahi ho sakta

// ------------------------------
// Example 3: Functions with Annotations
// ------------------------------
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));   // ✅ 15
// console.log(add(5, "10")); // ❌ error: Argument of type 'string' is not assignable to parameter of type 'number'

// ------------------------------
// Example 4: Arrays
// ------------------------------
let numbers: number[] = [1, 2, 3, 4];      // sirf numbers
let names: string[] = ["Ali", "Ahmed"];    // sirf strings

// numbers.push("Hello"); // ❌ error
numbers.push(5);          // ✅ theek hai

// ------------------------------
// Example 5: Any Type (not recommended)
// ------------------------------
// 'any' ka matlab hota hai ke variable me koi bhi type aa sakti hai
let randomValue: any = 10;
randomValue = "Hello";   // ✅ allowed
randomValue = true;      // ✅ allowed

// ------------------------------
// Easy Summary
// ------------------------------
// ✅ Type Annotations = manually type batana
// ✅ Variables, Functions, Arrays sab me use hoti hai
// ✅ Errors jaldi pakad me aate hain
// ✅ Syntax: let variableName: type = value;

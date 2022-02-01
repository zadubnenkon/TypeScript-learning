// Multiple lines
let x: [string, number];
x = ["hello", 10];

// One line
let y: [string, number] = ["goodbuy", 42];

// Error case:
x = [10, "hello"]; // Type 'string' is not assignable to type 'number'
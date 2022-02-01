// Any type for array
let y: [any, any] = ["goodbuy", 42];
let z: Array<any> = [10, "hello"];

// Any type for string
let notSure: any = false;

// Issue case (no error)
notSure = true;     // boolean
notSure = 42;       // number
notSure = "hello";  // string
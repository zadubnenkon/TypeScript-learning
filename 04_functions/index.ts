// Multiple argument types
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword('Jack', 31);     // 'Jack31'
createPassword('Jack', '31');   // 'Jack31'



// Function with optional argument 'age'
const createPassword = (name: string, age?: number) => `${name}${age}`;



// REST
const createSkills = (name, ...skills) => `${name}, my skils are ${skills.join()}`;

// REST type
const createSkills = (name: string, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;

// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React');	// "Jack, my skils are JS,ES6,React"



// Returned type is string
const createPassword = (name: string, age: number | string): string => `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;

// Returned type is object
const createEmptyObject = (): object => ({});

// Void
const greetUser = ():void => {
    alert("Hello, nice to see you!");
};

// Never Type
// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};



// Function type description
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
};

myFunc = oldFunc;



// Describe function type with wrong return type
let myFunc: (firstArg: string) => number;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
};

/*
  Error:
  Type '(name: string) => void' is not assignable to type '(firstArg: string) => number'.
  Type 'void' is not assignable to type 'number'
*/
myFunc = oldFunc;
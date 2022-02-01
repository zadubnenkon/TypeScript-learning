// For function result:
const greetUser1 = (): void => { // Here 'void' is function return type. Correct
    alert("Hello, nice to see you!");
};

// For 'greetUser'
// Error: Type '() => void' is not assignable to type 'void'
const greetUser2: void = () => { // Here 'void' is variable type. A variable cannot be void and function at the same time.
    alert("Hello, nice to see you!");
};
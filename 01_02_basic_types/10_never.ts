//Function returning never must not have a reachable end point

// Function return Error
const msg = "hello";
const error = (msg: string): never => {
    throw new Error(msg); // or error(msg)
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
    }
};
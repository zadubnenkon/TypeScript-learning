// Array Type
let list: Array<number> = [1, 2, 3];



// Define object type
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
};

// Try to change property
let user: { name: string, age: number } = {
    name: 'Yauhen',
  	/*
      Error:
 	The expected type comes from property 'age' 
 	which is declared here on type '{ name: string; age: number; }'
    */
    age: 'test',		// <--- Must be a number
};

// Try to change variable type
user = 'test';  // Type '"test"' is not assignable to type '{ name: string; age: number; }'

// Additional property
let user: { name: string, age: number } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev', // Object literal may only specify known properties, and 'nickName' does not exist in type '{ name: string; age: number; }'
};

// Dynamically try to add 'nickName' property
user.nickName = 'webDev';  // Property 'nickName' does not exist on type '{name: string; age: number;}'



// Updating object type
let user: { name: string, age: number, nickName: string } = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',	   // Now everything is correct
};



// Using Type for objects structure
type Person = { name: string, age: number, nickName: string };

// 2 object with almost the same structure
let user: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev',     // <--- property
};

let admin: Person = {
    name: 'Max',
    age: 20,
    getPass(): string {     // <--- new method
        return `${this.name}${this.age}`;
    },
};  // Error: Property 'nickName' is missing in type '{ nickName: string; }' but required in type '{ name: string; age: number; nickName: string;}

// Updating type with optional properties
type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string,
};



// Similar example:
type Person = {
  name: string,
  age: number
};

// Use intersection types
type User = Person & { nickName: string };
type Admin = Person & { getPass: () => string };


const user: User = {...};
const admin: Admin = {...};


//You can do it with interfaces by inheritance:
interface IAdmin extends IPerson {
   getPass: () => string
};
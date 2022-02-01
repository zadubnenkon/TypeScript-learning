// Define namespace
namespace Utils {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Try to call method outside namespace
const myPass = Utils.getPass('Yauhen', 31);	// Property 'getPass' does not exist on type 'typeof Utils'



// Export data from Namespace
namespace Utils {

    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;

};

// Calling exported from namespace methods
const myPass = Utils.getPass('Yauhen', 31);     // "Yauhen31"
const isSecret = Utils.isEmpty(Utils.SECRET);   // "false"

// Constant with the same name outside namespace
const PI = 3;                                   // No Errors
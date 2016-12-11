/*
 * Javascript: One Parameter Functions
 * write one parameter functions for functionalities that are clearly two
 * parameter functionalities like summing two numbers
 */

// addSum
const addSum = (n1 , n2) => {
    return n1 + n2;
};

// addSum: One param version
const addSum1 = (n1) => {
    const addSum2 = (n2) => n1 + n2;
    return addSum2;
};

// Concatenate
const concatenate = ( string1 , string2 ) => {
    return string1 + string2;
};

// Concatenate: One param version
const concatenate1 = ( string1 ) => {
    return ( string2 ) => string1 + string2;
};

// Comparison function:
const getLargerValue = ( n1, n2 ) => {
    if( n1 > n2 ){
        return n1;
    } else {
        return n2;
    }
};

// Comparison function: One param version
const getLargerValue1 = ( n1 ) => {
    return ( n2 ) => {
        if( n1 > n2 ){
            return n1;
        } else {
            return n2;
        }
    };
};

// Three parameter function being turned into one parameter function
// Volume
const volume = ( length, breadth, height) => {
    return length * breadth * height;
};

// Volume: One param version
const volume1 = ( length ) => {
    const lengthAndBreadth = ( breadth ) => {
        const lengthAndBreadthAndHeight = (height) => {
            return length * breadth * height;
        };
    };
    return lengthAndBreadth;
};

// Sum: Adding a specified number to each member of an array
const arr = [ 1, 2, 3, 4 ];
const sumArr1 = (n1) => {
    return (n2) => n1 + n2;
};

// Multiply each number in an array by a specific number.
const multiply = function (n1){
    return (n2) => n1 * n2;
};

// Prefixing an array of names with Mr.
const concatSurname = (s1) => {
    return ( s2 ) => `${s1} ${s2}`;
};

const arrNames = ["Amitabh Bachchan",
    "Aamir Khan",
    "Mammootty",
    "Leonardo Di Caprio"
];

/*
 * makeRegexParser takes a regular expression and returns the exec function,
 * which takes a string. validateValueWithFunc will pass the string, value, to
 * the parse function, i.e. exec.
 */

// Use bind to call parserfn with the regex as the 'this' context
// return a fn to parse the regex
const makeRegexParser = regex => regex.exec.bind(regex);

// parseFn options
const parseSsn = makeRegexParser( /^\d{3}-\d{2}-\d{4}$/ );
const parsePhone = makeRegexParser( /^\(\d{3}\)\d{3}-\d{4}$/ );

const validateValueWithFunc = ( value, parseFn, type ) => {
    if ( parseFn( value ) ) {
        return `Valid ${type.toUpperCase()}`;
    } else {
        return `Invalid ${type.toUpperCase()}`;
    }
};

/*
 * higher-order function that returns a function:
 * Here we have makeAdder that takes constantValue and returns adder, a function
 * that will add that constant to any value it gets passed.
 */
const makeAdder = constantValue => {
    // closure retains a reference to var constantValue after makeAdder returns
    const adder = value => constantValue + value;
    return adder;
};
/*
 * Notice that the function adder has access to constantValue even after
 * makeAddr returns. That’s because constantValue was in its scope when adder
 * was created.
 */


const grandParent = (g1, g2) => {
    const g3 = 3;
    const parent = (p1, p2) => {
        const p3 = 33;
        const child = (c1, c2) => {
            const c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
};

// const parentFunc = grandParent( 1, 2 ); // returns parent()
// const childFunc = parentFunc( 11, 22 ); // returns child()
// console.log( childFunc( 111, 222 ) ); // prints 738
// // 1 + 2 + 3 + 11 + 22 + 33 + 111 + 222 + 333 == 738


/*
 * Closures:
 * Demonstrate that you can define a function within another function.
 */

const bankInterest = ( principal, rateOfInterest ) => {
    // inner closure
    const convertCurrency = ( amount, fromCurrency, toCurrency) => {
        // Pseudo function
    };
};
/*
 * Demonstrate that the inner function has access to the variables of outer
 * function.
 */
const doMath = ( n1, n2, n3 ) => {
    // Inner closure
    const sum = () => {
        return n1 + n2 + n3;
    };
    // invoke sum and bind it to the result var for a return of sum invocation
    // to the outer fn doMath
    const result = sum();
    return result;
    // return sum without invocation to outer fn doMath
    // return sum;
};

/*
 * Demonstrate that closure can have multi level nesting and that the function
 * at the innermost level can see variables at all it’s outer levels.
 */
const levelOneFunction = () => {
    const variableArray = [];
    const levelOneVariable = 'levelOneValue';
    const levelTwoFunction = () => {
        const levelTwoVariable = 'levelTwoValue';
        const levelThreeFunction = () => {
            const levelThreeVariable = 'levelThreeValue';
            // invocation of levelThreeFunction returns values of all vars that
            // existed in it's and it's parent scopes
            return `1: ${levelOneVariable}, 2: ${levelTwoVariable},
                3: ${levelThreeVariable}`;
        };
        // invocation of levelTwoFunction returns levelThreeFunction without
        // invocation
        return levelThreeFunction;
    };
    // invocation of levelOneFunction returns levelTwoFunction without invocation
    return levelTwoFunction;
};

/*
 * Module: a module allows the caller access to multiple functionalities where
 * as a function(in the general sense) exposes one functionality.
 * Additionally, the module can have any number of helper functions within it to
 * help with achieving the functionalities. These helper functions which are of
 * no interest to the client are buried within the closure and is not visible to
 * the external world.
 */
// doMath closure function which returns a module with add,subtract,multiply and
// divide capabilities.
const doMath2 = ( n1, n2 ) => {
    const _add = () => n1 + n2;
    const _subtract = () => n1 - n2;
    const _multiply = () => n1 * n2;
    const _divide = () => n1 / n2;

    const module = {
        add: _add,
        subtract: _subtract,
        multiply: _multiply,
        divide: _divide
    };
    return module;
};

/*
 * Modules: similar example that works on strings instead of numbers
 */
const stringModule = string => {
    const _toUpper = () => string.toUpperCase();
    const _toLower = () => string.toLowerCase();
    const _trimSpace = () => string.trim();

    // obj with key: value pairs to expose functionalities
    const module = {
        toUpper: _toUpper,
        toLower: _toLower,
        trimSpace: _trimSpace
    };
    return module;
};

/*
 * Memoization: technique of keeping handy the results of previous computations
 * of a function so as to leverage the previously saved results so as to not
 * have to perform the computation again.
 *
 * The technique is that when the function computation is done for a particular
 * value of the argument, the result storage is checked to see if the result
 * already exists there and if yes that result is used directly. If not, as
 * follows logically, the computation would be done and the result would be
 * saved back to the result storage.
 */
const memFib = number => {
    const _memArray = [ 1, 1 ];
    const fib = () => {
        if( _memArray[ number ] === undefined ) {
            _memArray[number] = memFib( number-1 ) + memFib( number-2 );
            return _memArray[ number ];
        } else {
            return _memArray[ number ];
        }
    };
    return fib( number );
};

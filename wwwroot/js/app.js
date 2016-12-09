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
            // invocation of levelThreeFunction return values of all vars that
            // existed in it's and it's parent scopes
            return `1: ${levelOneVariable}, 2: ${levelTwoVariable},
                3: ${levelThreeVariable}`;
        };
        // invocation of levelTwoFunction return levelThreeFunction without
        // invocation
        return levelThreeFunction;
    };
    // invocation of levelOneFunction return levelTwoFunction without invocation
    return levelTwoFunction;
};

/*
 * Modules
 */

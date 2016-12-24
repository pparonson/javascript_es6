console.log( 'starting.. ' );
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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
 // __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

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
// __________________________________________________________________________

/*
 * A simpler counter(as in increment) example which does make use of the fact
 * that the inner function has access to the outer function variables after the
 * outer function exits.
 */
// const increment = () => {
//     let _counter = 0;
//     const increment = () => {
//         return _counter++;
//     };
//     // obj with key: value pairs to expose functionalities
//     return {
//         plusOne: increment
//     };
//     // return increment;
// };
// __________________________________________________________________________

/*
 * A very similar simple state based example, this time for registry
 * functionality to collect names that were in attendance.
 *
 * The inner function writes into the outer function’s _counter variable.
 */
// const attendance = () => {
//     const _attendees = [];
//     const _register = name => _attendees.push( name );
//     // obj with key: value pairs to expose functionalities
//     return {
//         attendees: _attendees,
//         register: _register
//     };
// };
// __________________________________________________________________________

/*
 * Authentication example: the inner functions use the outer function’s
 * variables to store state.
 */
const authenticate = () => {
    let _password = 'password';
    const _login = password => {
    if ( password === _password ) {
        return "Logged in successfully";
    } else {
        return "Password does not match. Use resetPassword if you forgot";
    }
};
    // resetPassword
    const _resetPassword = newPassword => {
        _password = newPassword;
    };
    // module
    return {
        login: _login,
        resetPassword: _resetPassword
    };
};
// __________________________________________________________________________

/*
 * constituency example merely demonstrates that multiple inner functions can
 * read and write into the same variables. This allows to capture system
 * behavior where different actors have varying influence on the state.
 */
const constituency = () => {
    let _leftVotes = 0;
    let _rightVotes = _leftVotes;
    const _lv3 = () => ++_leftVotes;
    const _lv2 = _lv3;
    const _lv1 = _lv2;

    const _rv3 = () => ++_rightVotes;
    const _rv2 = _rv3;
    const _rv1 = _rv2;

    // module
    return {
        rightVotes: _rightVotes,
        leftVotes: _leftVotes,
        leftVoterOne: _lv1,
        leftVoterTwo: _lv2,
        leftVoterThree: _lv3,
        rightVoterOne: _rv1,
        rightVoterTwo: _rv2,
        rightVoterThree: _rv3
    };
};
// __________________________________________________________________________

/*
 * Basically, what we see here is that closure allows functions to retain state
 * from previous executions. Usually, when a function is invoked, it gets a
 * fresh start with the values of the parameters passed in and the declared
 * initial values.
 */
const increment = () => {
    let _counter = 0;
    const increment = () => {
        return _counter++;
    };
    // obj with key: value pairs to expose functionalities
    return {
        plusOne: increment
    };
    // return increment;
};
// __________________________________________________________________________

/*
 * Currying or Partial Application: currying refers to the process of adding in
 * some parameters on to the function to have a modified function that already
 * has some parameters pre-instated on it and only the remaining parameters need
 * to be passed in for the function to actually be invoked.
 */

// 1) First we add currying capability to Function.prototype
// 2) Next we define a protagonist function
// 3) After which we create a new version of the protagonist function with a
//  partial set of arguments curried into the protagonist function.
// 4) Finally, we validate that the curried version indeed is able to perform
//  the functionality with just the remaining number of parameters passed in.

// 1) First we add currying capability to Function.prototype
// Function.prototype.curry = () => {
//     const curryingFunction = this; // Window object
//     const curryingArguments = arguments;
//     const curriedFunction = () => {
//         const invocationPlusCurriedArguments = [];
//         curryingArguments.forEach( argument => {
//             // push each param arg to the new array
//             invocationPlusCurriedArguments.push( argument );
//         } );
//         arguments.forEach( argument => {
//             invocationPlusCurriedArguments.push( argument );
//         } );
//             return curryingFunction().apply( null,
//                 invocationPlusCurriedArguments);
//         }; // end curriedFunction
//     return curriedFunction;
// };

// 2) Next we define a protagonist function
const addFiveNumbers = ( n1, n2, n3, n4, n5 ) => {
    return ( n1 + n2 + n3 + n4 + n5 );
};

// 3) After which we create a new version of the protagonist function with a
// partial set of arguments curried into the protagonist function.
// Invoke currying method on the prototype from the protagonist function to
// create the curried function.In this example, addTwoNumbers has 1,2,3
// parameters baked in.
// const addTwoNumbers = addFiveNumbers.curry( 1, 2, 3 );

/*
 * Learning JavaScript Closures through the Laws of Karma
 */
const sayHi = () => {
    alert("Yay, I am going to master Closures!");
};
const doStuff = functionReference => functionReference();

const getSayHiFunction = () => sayHi;
// __________________________________________________________________________

/*
 * You can't directly access "message" variable that's declared inside the test
 * function from outside the test function
 */
const outer = () => {
    const a = 10;
    let sum = 0;

    // Nested function definition
    const inner = () => {
        const b = 20;

        // Nested function can access outer function's variables and scope
        sum = a + b;
    };
    inner();
    alert( sum );
};
// __________________________________________________________________________

/*
 * A closure is a name given to a feature in the language by which a nested
 * function executed after the execution of the outer function can still access
 * outer function’s scope.
 */
const getNewLife = karmaScore => {
    const message = `My karma score is: ${ karmaScore }`;

    // This is function nesting - declaring a function inside a function.
    const nextLife = () => {
        // Please notice the usage of "message" variable
        console.log( message );
    };

    // We can return a function from another function
    return nextLife;
};

// myNextLife is a function now.
const myNextLife = getNewLife( 90 );

// alerts "My karma score is: 90".
// myNextLife();

// myOtherLife is another function now.
const myOtherLife = getNewLife(95);

// alerts "My karma score is: 95".
// myOtherLife();
// __________________________________________________________________________

/*
 In programming, we often need a sequence generator which generates strings
 like S1, S2, S3 and so on. Let’s try to solve it with brute force way and see
 what are the problems with it.
*/
let current = 0;
const getSequenceValue = () => {
    current = current + 1;
    return "S" + current;
};

getSequenceValue(); // S1
getSequenceValue(); // S2


const getSecret = secret => {
  return {
    get() {
        return secret;
    }
  };
};

// secret is bound to a fn that takes an arg 'msg' and returns a fn that returns
// the arg 'msg'
const secret = msg => () => msg;

/*
 Application: The process of applying a function to its arguments in order to
 produce a return value.

 Partial Application: The process of applying a function to some of its
 arguments.

 The partially applied function gets returned for later use. In other words, a
 function that takes a function with multiple parameters and returns a
 function with fewer parameters.
*/
// partialApply is bound to a fn that takes 2 args ( fn, ...fixedArgs) and
// returns
const partialApply = ( fn, ...fixedArgs ) => {
    return function (...remainingArgs) {
return fn.apply(this, fixedArgs.concat(remainingArgs));
};
};
const add = (a, b) => a + b;
const add10 = partialApply(add, 10);

/*
  The function below executes the function bar which was returned
  when we executed the function foo in the line above. The function bar
  invokes boop, at which point bar gets suspended and boop gets push
  onto the top of the call stack (see the screenshot below)

  The fn foo takes an arg "a"; binds 3 const "b", "bar", "boop"; and returns the
  fn "bar"
  The const "moar" is bound the the invoked fn foo called with arg 5.

*/
const x = 10;
const foo = a => { // a = 5
    const b = 20;

    const bar = c => { // c = 15
        const d = 30;
        return boop( x + a + b + c + d );
    };

    const boop = e => { // 10 + 5 + 20 + 15 + 30
        return ( e * -1 );
    };

    return bar;
}; // end foo

// const moar = foo(5); // Closure

// moar(15);
// __________________________________________________________________________
/*
 Currying: funfunfunction - Part 6
*/

// Non-curry version
let dragon = ( name, size, element ) => {
    return `${ name } is a ${ size } dragon that breathes ${ element }!`;
};
// console.log( `Noncurry: ${ dragon( 'Pete', 'large', 'fire' ) }` );

// Curry version
let dragonCurry = ( name ) => {
    return ( size ) => {
        return ( element) => {
            return `${ name } is a ${ size } dragon that breathes ${ element }!`;
        };
    };
};
// console.log( `Curry: ${ dragonCurry( 'Pete' )( 'smaller' )( 'flames' ) }` );
// __________________________________________________________________________
/*
 Practical ramda - functional programming examples:
 http://www.macwright.org/2015/08/27/practical-ramda.html
*/
// console.log( R.prop( 'x', { x: 100 } ) ); //=> 100

let data = [ { id: 'foo' }, { id: 'bar' } ];

// use prop as a fn to compose to map
const result = R.map( R.prop( 'id' ), data );

// console.log( result );
/*
 Thinking in Ramda: Getting Started
 http://randycoulman.com/blog/2016/05/24/thinking-in-ramda-getting-started/
*/
// Replace this:
const myArray = [ 1, 2, 3, 4, 5, 6 ];
// for (const value of myArray) {
//   console.log(value);
// }
const logItem = ( ( item ) => {
	// console.log( item );
} );
const logResult = R.forEach( logItem, myArray );

/*
 filter applies its function (isEven in this case) to each element of the
 array. Whenever the function returns a “truthy” value, the corresponding
 element is included in the result. Whenever the function returns a “falsy”
 value, the corresponding element is excluded (filtered out) from the array.
*/
const isEven = ( item ) => item % 2 === 0;
const filterResult = R.filter( isEven, myArray );
// console.log( filterResult );
/*
 reject does exactly the same thing, but in reverse. It keeps the elements for
 which the function returns a falsy value and excludes the values for which it
 returns a truthy value.
*/
const isNotEven = ( item ) => item % 2 === 0;
const rejectResult = R.reject( isEven, myArray );
// console.log( rejectResult );
/*
reduce takes a two-argument function, and initial value, and the array to
operate on.
The first argument to the function we pass in is called the “accumulator” and
the second argument is the value from the array. The function needs to return a
new accumulator value.
*/
const reduceForSum = ( acc, item ) => {
    return acc + item;
};
const reduceResult = R.reduce( reduceForSum, 100, myArray );
// console.log( reduceResult );
/*
 What if we wanted to find the first odd number instead?

 Ramda provides a higher-order function, complement, that takes another function
 and returns a new function that returns true when the original function returns
 a falsy value, and false when the original function returns a truthy value.
*/
const complementFilterResult = R.filter( R.complement( isEven ), myArray );
console.log( complementFilterResult );


/*
function myName(name) {
    // console.log("Hi! My name is " + name); //==> String Concatenation
    console.log(`Hi! My name is ${name}`); //Template Literal
}

myName("Anurag")
myName("Mayank")
myName("Raj")

console.log(myName) //=== Here, .length property will output the number of parameters in the function
*/

//<================================= Function.length ===========================>

/*
function test1() { }  // ==> Length = 0 as no parameters
function test2(a, b, c) { } // ==> Length = 3 as 3 parameters
function test3(x, y = 5, z) { } // ==>  Length = 1 
function test4(...rest) { } // ==> Length = 0 
console.log(test1.length, test2.length, test3.length, test4.length);

coz the length property of a function returns the number of parameters expected by the function, excluding rest parameters and counting only parameters before the first one with a default value.

*/

/*
function calculateSum(a, b) {
    return a + b;
}

// const result = calculateSum(3, 4)
const result = calculateSum(calculateSum(5, 7), calculateSum(8, 19))

console.log(result)
console.log(typeof calculateSum(5, 6))

*/


//<====================== Arguments keyword ======================>

/*
function calculateArgumentSum() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

const result = calculateArgumentSum(32, 3, 45, 6, 7);
console.log(result)
*/

function changeValues(a, b) {
    console.log(arguments[0])
    console.log(a)
    console.log(arguments[2]) //==> undefined
    // a = 2;
    arguments[0] = 13
    console.log(a, arguments)
}

// changeValues(23, 45);



function calculateSum(arr, i = 0) {

    if (i >= arr.length) {
        return 0;
    }

    return arr[i] + calculateSum(arr, i = i + 1);
}

const arr = [1, 2, 3, 4, 5]
let i = 0;
const sum = calculateSum(arr, i)
console.log(sum)

//<======================== IIFE =======================>

! function ImmediatelyInvokedFunctionExpression() {
    console.log("hello");
}();

(function ImmediatelyInvokedFunctionExpression() {
    console.log("hello");
})()

    + function (x) {
        console.log("hello " + x);
    }(6)


//<======================== Execution Context ========================>


console.log(username)
var username = "mayank";
let age = 25;

var sayHi = function () {
    const a = 12;
    const b = 23;
    console.log(a, b);
}

sayHi();

//<====================== Hoisting ===================>

/*
let a = 23;

if (true) {
    var a = 34;
}

console.log(a)

==> let a = 23:

    - a is hoisted and placed in block scope (in this case, global scope because it’s outside any block). It's in the Temporal Dead Zone (TDZ) until it's initialized.

Inside the if block:
    - var a is hoisted to the global scope (not block scoped).

    - var does not respect block scope, only function/global scope.

    - But wait — there’s already a let a in the global scope.

    ==> The var a inside the if block tries to declare a again in the same (global) scope where let a was already declared.
*/

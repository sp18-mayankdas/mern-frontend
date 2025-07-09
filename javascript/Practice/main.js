/*
var a = 1;
function foo() {
    console.log(a);
    var a = 2;
}
foo();
*/

/*
function test() {
    console.log(a);
    console.log(b);
    var a = 1;
    let b = 2;
}
test();
*/

/*
console.log(typeof func);
var func = function () { };
*/

/*
(() => {
    console.log(typeof x);
    var x = 5;
})();
*/

/*
function foo() {
    console.log(bar);
    var bar = "baz";
}
foo();
*/

//<====================== EVENT LOOP ===================>

/*
console.log("start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
*/

/*
setTimeout(() => console.log("timeout"), 1000);
for (let i = 0; i < 100000; i++) {
    console.log(i)
}
console.log("loop done");
*/


/*
Promise.resolve().then(() => {
  console.log("promise 1");
  return Promise.resolve();
}).then(() => {
  console.log("promise 2");
});
*/

/*
async function foo() {
    console.log(1);
    await console.log(2);
    console.log(3);
}
foo();
console.log(4);
*/

/*
queueMicrotask(() => {
  console.log('microtask');
});

setTimeout(() => {
  console.log('macrotask');
}, 0);
*/

/*
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}

async function async2() {
    console.log("async2");
}

console.log("script start");

setTimeout(function () {
    console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});

console.log("script end");
*/

//<======================= Hoisting =========================>

/*
function hoistingExample() {
    a = 1;
}
hoistingExample();
console.log(a);

//----------------------------

function hoistingExample() {
    var a = 1;
}
hoistingExample();
console.log(a);
*/

/*
function a(){
  console.log("1")
}
a();
function a(){
  console.log("2")
}
a();
*/

//====> OUTPUT : 2 2 -> coz the function declarations are hoisted completely and override each other if they have same name- only the last one survive.


//BUT

/*
var a = function () {
  console.log("1");
};
a();
var a = function () {
  console.log("2");
};
a();
*/

//==> OUTPUT: 1 2 -> coz incase f function expressions ,  you get different behaviour , var doesnt overwrite the earlier assignment immediately- it just reassigns the  value later.


/*
var test = 1;
function functionHoisting() {
  test = 10;
  return;
function test() {}
}
functionHoisting();
console.log(test);
*/

//==> function test is hoisted , so test becomes a local variable to function hoisting , coz function declarations create their own variable bindings.so now test = 10 is assigning or changing the local test so , we are changing the local test and not the global one, and the local test is discarded because the function execution context is destroyed.so the global test is still 1. 





//<======================= Asynchornous javascript ==========================>
/*
console.log("START")

setTimeout(() => {
    console.log("Inside the async code");
}, 3000);

console.log("END")
*/

///<==================================== DOM API ===============================>

/*
console.log("Start");

document.addEventListener("click", function cb() {
    console.log("Hello");
});

console.log("End");
*/



// function myDisplayer(str) {
//     document.getElementById("demo").innerHTML = str;
// }


// function myFirst() {
//     myDisplayer("Hello");
// }

// function mySecond() {
//     myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();


//Creating a promise
/*
const cart = ['shoes', 'pant', 'shirt'];

const promise = createOrder(cart);

promise
    .then((orderId) => {
        console.log(orderId);
    })
    .catch((err) => {
        console.log(err.message);
    })

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = 23247;
        if (orderId) {
            resolve(orderId);
        }
    })

    return pr;
}

function validateCart(cart) {
    return false;
}

*/


//<================= async await =======================>

async function getData() {
    return "HELLO";

}

const data = getData();
console.log(data);


/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully");
    }, 6000);
})

async function handlePromise() {
    const data = await promise;
    console.log(promise);
    console.log("Hello")
}

handlePromise();
*/

const promise = new Promise((resolve, reject) => {
    const computation = Math.random() * 100;
    setTimeout(() => {
        if (computation < 50) {
            resolve(computation);
        } else {
            reject(`Computation is too high: ${computation}`);
        }
    }, 1000);
});

promise.then(result => {
    console.log(`Computation result: ${result}`);
}).catch(error => {
    console.error(`Error occurred: ${error}`);
});


//<================================ Promise ===========================>
/*
function taskA(callback) {
    setTimeout(function () {
        console.log("Task A has completed.");
        callback();
    }, 3000)
}

function taskB() {
    console.log("Task B has completed.");
}

taskA(taskB)
*/


/*
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}


async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}
add1(10).then(v => {
  console.log(v);
});


async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + await p_a + await p_b;
}

add2(10).then(v => {
  console.log(v);
});

*/

console.log("a");

setTimeout(() => {
    console.log("b")
}, 0)
console.log("c");

console.log('a');
function login(email, password) {
    setTimeout(() => {
        return { usertoken: "randomId" }
    }, 3000);
}
const token = login("abc@gmail.com", "1234");
console.log(token);
console.log('c');

//<=============== practice=================>

/* Q1. Create a function that prints the numbers 1 to 5, each after 1 second using nested setTimeout. */


//===========> Using Callback

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
                setTimeout(() => {
                    console.log(5);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


//=====> Using Promises
function delayPrint(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    })


}

// delayPrint(1)
//     .then(() => delayPrint(2))
//     .then(() => delayPrint(3))
//     .then(() => delayPrint(4))
//     .then(() => delayPrint(5))


//===> using Async-await
async function printNumber() {
    for (let i = 0; i <= 5; i++) {
        await delayPrint(i);
    }
}

printNumber();


const counter = {
    count: 0,
    start: () => {
        setTimeout(() => {
            // this.count++
            console.log(this);
        }, 1000);
    }
}

counter.start();

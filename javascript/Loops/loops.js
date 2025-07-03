
/*
const arr = [43, 7, 8, 92, 10, 87, 99, 65];
arr.age = 22

console.log("Arrays using For-In Loop:");
for (let i in arr) {
    console.log(i, arr[i])
}

console.log("\nArrays using For Loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
}
*/

/*
const arr = [21, 4545, 45, 6, 7, 7, 23, 5];

for (let i = 0.1; i < 1; i += 0.1) {
    console.log(i)
}
*/

/*
for (var i = 0; i < 3; i++) {
    console.log(i)
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
*/

// const arr = [12, 45, , 6];

// for (let i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

/*
const obj = { a: 1, b: 2 };
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    obj["c"] = 3;
    console.log(keys[i], obj[keys[i]]); // Outputs: a 1, b 2 (c is not included)
}
*/

//<===================== What happens if you modify an array during a for loop?==================>

/*
const arr = [9, 8, 7, 6, 5];

for (let i = 0; i < arr.length; i++) {
    // arr.push(6);   
    // console.log(arr[i])
}

for (let elements of arr) {
    arr.push[7];
    console.log(elements)
}

*/

//===>: This creates an infinite loop because arr.length increases with each push.With for...of, you get an error or unpredictable behavior if the iterable is modified, but it’s safer because it doesn’t rely on length.
/*
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
console.log("done")
*/


//<============================ Questions on loops ======================>

/*
const arr = [1, 2];
arr.foo = "bar";
for (const v of arr) console.log(v);
for (const i in arr) console.log(i, arr[i]);
*/

/*
const obj = { '2': 'two', '10': 'ten', 'a': 'A' };
for (const k in obj) console.log(k);
*/

/*
Object.prototype.z = 100;
const o = { a: 1, b: 2 };
console.log(Object.prototype.hasOwnProperty("z"));
// for (const k in o) console.log(k);
*/

const arr = []
arr[0] = 'a';
arr[2] = 'v'

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]) // 0 a , 1 undefined ,  2 v
}

for (let i in arr) {
    console.log(i, arr[i]) // 0 a , 2 v
}

for (i of arr) {
    console.log(i)  //a , undefined ,   v

}

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



function myDisplayer(str) {
    document.getElementById("demo").innerHTML = str;
}


function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

mySecond();
myFirst();
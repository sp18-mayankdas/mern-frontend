
setTimeout(() => console.log("timeout"), 1000);
for (let i = 0; i < 100000; i++) {
    console.log(i)
}
console.log("loop done");
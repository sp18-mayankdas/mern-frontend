// const array = [10, 20, 30];
// console.log(toString());


// console.log(typeof (array));

// console.log(array[0o2]);
// console.log(array[02]);
// console.log(array[2]);
// console.log(array['2']);
// console.log(array["2"]);
// console.log(array["02"]);
// console.log(array['02']);
// console.log(array["0o2"]);
// console.log(array['0o2']);

// console.log(array["2"] === array[02]);

// console.log('2' == '02');
// console.log(2 == 0o2);


// const arr = []

// arr[0] = "banana";
// arr[2] = "apple"

// console.log(arr);
// console.log(arr.length);


//<========================== Array Methods ==========================>

const array = [10, 20, 30, 40, 50];

//Pop()

// console.log(array.pop());

//Push()

// console.log(array.push(20));

//shift ==> pop ka ulta

// console.log(array.shift());
// console.log(array[0]);
// console.log(array.length);

//unshift ==> push ka ulta

// console.log(array.unshift(670));
// console.log(array[0]);
// console.log(array.length);


//SLice

// console.log(array);
// console.log(array.slice(2,6));


//Splice

// console.log(array.splice(3, 1, 80, "50", true));
// console.log(array)


//MAP
// console.log(array.map(() => { }))


//BINARY CONVERSION

// let x = 10;
// console.log(x.toString(2));


//Map and forEach comparison 

// console.log(array.forEach((item) => item * 2).filter(item => item > 30));
//==> will give typererror coz the forEach loop simply loops over the array and executes the callback for each element, and it does not return a new array , and if does not return a new array the output of the foreach loop will be undefined and when we will do undefined.filter , so we will get the typeError as undefined has no method filter.

// console.log(array.map((item) => item * 2).filter(item => item > 30));



//<========================== Multi-Dimensional Array ==========================>

// const nameAndNumberList = [['Akash', 90], ['Mayank', 76]];

// console.log(nameAndNumberList[0]);


// console.log(array);
// console.log(array.copyWithin(1, 0));
// console.log(array.flat());


//<========================== Flat =================>

// const myArr = [[1, 2, [3, 4]], [3, 4], [5, 6]];
// const newArr = myArr.flat();
// console.log(newArr)


console.log("10" > "2");
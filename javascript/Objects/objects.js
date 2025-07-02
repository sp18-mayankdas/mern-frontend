/*
const user = {
    firstName: "mayank",
    lastName: "das",
    age: 26,
}

const user2 = {
    firstName: "mayank",
    lastName: "das",
    age: 26,
}

console.log(user == user2); //==> False
console.log(user === user2); //==> False

*/







//<======================== Objects inside objects ===========================>

/*
const user = {
firstName: "mayank",
"last-name": "das",
age: 26,
address: {
    city: "delhi",
    pincode: 898989,
    state: ["karnataka", "delhi", "Maharashtra", "Banglore", "rajasthan"]
}
}


console.log(user.address.state[0])
console.log(user["last-name"])
*/

//<====================== Accessing symbols in objects===============>

/*
let mySum = Symbol("Symbol outside object");
let str = "mystring"

const user = {
    name: "mayank",
    "last-name": "Das",
    full_Name: "Mayank Kumar Das",
    email: "mayank789@google.com",
    mySym: "mykey1",
    [mySum]: "SymbolInsideObject",
    mystring: "hello"
    }

    console.log(user["full_Name"])
    console.log(user.full_Name)
    console.log(typeof user.mySym)
    console.log(typeof user[mySum])
    console.log(typeof mySum)
    console.log(typeof user[str])
    console.log(user)

    */

//<====================== functions in Objects ======================>

/*
const user = {
    name: "mayank",
    age: 22,
    email: "mayank23@google.com"
    }

    user.greeting = function () {
        console.log("Hello User, " + user.name)
        }

        console.log(user);
        console.log(user.email)
        console.log(user.greeting())

*/


//<====================== Merging in Objects ======================>

/*

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 }; //==> normally copying the objects
// const obj3 = Object.assign(obj2, obj2); //==> by Object.assign()
// const obj3 = { ...obj1, ...obj2 }; //==> using spread operator

console.log(obj3)
console.log(obj2)
console.log(obj1)
console.log(obj2 === obj3)

*/


//<====================== Objects Methods ======================>

/*
const user = {
    name: "mayank",
    age: 21,
    isLoggedin: true,
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(user.hasOwnProperty('isLoggedin'));
*/
/*
const user = {
    name:"mayank",
    age:21
}

console.log(user.toString())
*/

// const names = ['mayank', "akash", "akshat", "raj", "rahul"];

// const user = {
//     age: 21,
//     name: "kirti"
// }

// const config = {
//     add: 10,
// }

// names.forEach((name) => {
//     console.log(name + config.add)
// })

// console.log()


// const user = {
//     name: "mayank",
//     name: "yan"
// }

// console.log(user.name)

//<=========================== Object properties ============================>
// console.log(Object)
// console.log(Object())
// console.log(Object(2,3,4))
// console.log(Object({ name: "raj", age: 21 }))
// console.log(Object(Number))
// console.log(new Object(1))


// const obj = {
//     a: 1,
//     b: 2,
//     a: 3,
// }
// console.log(obj);

//<================ length of array =================>
/*
function calculateLength(myObj) {
    let key, length = 0;

    for (key in myObj) {
        if (myObj.hasOwnProperty(key)) {
            length++;
        }
    }
    return length;
}

const user = {
    a: "21",
    b: "22",
    3: 23,
    c:"34"
}

const user2 = {
    1: "a",
    2: "b",
    3: "c"
}

let length = calculateLength(user2)

console.log(user,"\n", user2)
console.log(length)
*/

//<==================== mutability in objects =======================>

/*

const x = {
    name: 'mayank',
    age: 22,
    email: "mayank@gooogle.com",
    address: {
        city: "delhi",
        pinCode: 110046,
        moreDetails: {
            population: 20093809,
            district: {
                Court: "nangal raya",
            }
        }
    }
}


//Shallow Copy
const y = { ...x };
// const y = x;


console.log(x)
console.log(y)

y.address.moreDetails.population = 23;
y.address.city = "mumbai";
y.age = 20;


console.log(x)
console.log(y)

*/


//<=================Deleting Properties==================>

/*
const user = {
    name: 'mayank',
    age: 22,
    rollNumber: 89
}

delete user.age;

console.log(user)
*/

//<============================== Displaying objects =====================>

/*
const user = {
    name: 'mayank',
    age: 21,
    rollno: 89
}
// let text = "";

for (let key in user) {
    console.log(user[key]);

}

*/

//<===================== Object constructor functions ==============>

/*
function Person(name, age, rollNo) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
}

const studentOne = new Person("akash", 23, 78);

console.log(Person);
console.log(studentOne.age);
*/

//<======================== Prototype =======================>
/*
function Person(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
}

Person.location = "delhi";
Person.prototype.location = "mumbai";

const student = new Person("akash", 22, 67);
console.log(Person.location);
console.log(student.location);
*/

//<==================== Seal vs Freeze ==================>

/*
const user = {
    name: "mayank",
    age:22,
    roll: 89,
    location:{
        city:"Delhi"
    }
}

// Object.freeze(user)
Object.seal(user)

user.age = 34;
user.location.city= "mumbai"

console.log(user)

*/

const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

// console.log(library[0].readingStatus)
// console.log(library[1].readingStatus)
// console.log(library[2].readingStatus)

library.forEach((element) => {
    // console.log("Reading Status of " + element.title + " is " + element.readingStatus)
    if (element.readingStatus) {
        console.log("Already Read " + element.title);
    }
    else {
        console.log("Still need to read " + element.title)
    }
});
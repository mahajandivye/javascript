// Primitive

// 7 Types: String , Number , Boolean , null , undefined , Symbol , BigInt

// Reference type(Non primitive)

// Array , Objects , Functions

// Javascript is dynamically typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null //object

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 3456437665443

// console.log(id == anotherId);
// console.log(typeof id); //symbol and not Symbol

const heroes = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "divye",
    age: 18,
}

const myFunction = function()
{
    console.log("hello world");
}

// console.log(typeof myFunction);
// console.log(typeof heroes);

// console.log(typeof myObj);

// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "divyemahajan.com"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

// console.log(anotherName);
// console.log(myYoutubeName);

let user1 =
{
    email: "user@google.com",
    upi: "user@ybl",
}

let user2 = user1

user2.email = "divye@google.com"

console.log(user1.email);
console.log(user2.email);

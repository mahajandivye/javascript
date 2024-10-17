// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "divye",
    "full name": "Divye Mahajan",
    [mySym]: "mykey1",
    age: 18,
    location: "patiala",
    email: "divye@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "divye@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "divye@microsoft.com"

// console.log(JsUser);

// function in js can be used as variables

JsUser.greeting = function()
{
    console.log("hello js user");
}

JsUser.greetingTwo = function()
{
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
 
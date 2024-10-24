const user = {
    username: "divye",
    price: 999,
    welcomeMessage: function()
    {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this);
// browser global object is window

// function chai()
// {
//     let username = "divye"
//     console.log(this.username); // undefined
// }
// chai();

// this can be used in objects

const chai = () =>
{
    let username = "divye"
    console.log(this);
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// const addTwo = (num1 , num2) => num1 + num2 //implicit return

// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => ({username: "divye"})
console.log(addTwo(3 , 4));

const myArray = [2,5,3,7,8]

// myArray.forEach()
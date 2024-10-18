
function sayMyName()
{
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumebrs(number1 , number2)
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2)
{
    let result = number1 + number2;
    return result;
}


// addTwoNumebrs(3 , "4")

// addTwoNumebrs(3 , "4")

// addTwoNumebrs(3 , null)

// parameters : at the time of function definition
// arguments : at the time of function call

const result = addTwoNumbers(3 , 5);

// console.log("Result: " , result);

function loginUserMessage(username = "sam")
{
    if(!username)
    {
        console.log("please enter a username");
        return;
    }
    else
    {
    return `${username} just logged in`
    }
}

// console.log(loginUserMessage("divye"));

console.log(loginUserMessage());



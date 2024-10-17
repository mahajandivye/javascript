// singleton or constructor

// const tinderUser = new Object()
const tinderUser = {} // non singleton obejcts or literal 
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"divye",
            lastname:"mahajan"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}
// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1 , ...obj2 , ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "d@gmail.com"
    }
] // array of objects

// console.log(users[1].email);
// console.log(users[1]);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // interesting // returns an array of keys

// console.log(Object.values(tinderUser)); // interesting // returns an array of values

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(tinderUser.hasOwnProperty('isLoggedOut'));
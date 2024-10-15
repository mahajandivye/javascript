let myDate = new Date;

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023 , 0 , 23);

// console.log(myCreatedDate.toString());

let newDate = new Date("01-04-2023");
// console.log(newDate);

// timestamps in javascript

let myTimeStamp = Date.now(); // like for fastets response time

// console.log(myTimeStamp);

// console.log(newDate.getTime()); // time of creation

console.log(Math.floor(Date.now()/1000)); // comparison in seconds

let anotherDate = new Date();
console.log(anotherDate);

console.log(anotherDate.getMonth() + 1);

console.log(anotherDate.getDay());

console.log(`${anotherDate.getDay()}  and the time is `);

anotherDate.toLocaleString('default' , {
    weekday: "long"
});

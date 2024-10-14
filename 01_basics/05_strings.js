const name = "divye"
const repoCount = 50

// console.log(name + repoCount + " Value"); // dont follow this syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // always follow this syntax

const gameName = new String('divye-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__ );

// console.log(gameName);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0 , 4) // when negative values are givern in the first position, it starts from 0th index , doesnt obey negative values of substring
// console.log(newString);

const anotherString = gameName.slice(-8 , 4)
// console.log(anotherString);

const newStringOne = "    divye   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://divye.com/divye%20mahajan"
// console.log(url.replace('%20' , '-'));

// console.log(url.includes('divye'));

// console.log(url.includes('hello'));

// console.log(gameName.split('-'));
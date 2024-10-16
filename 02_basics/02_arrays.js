const marvel_heroes = ["Thor" , "Ironman" , "Spiderman"];

const dc_heroes = ["Superman" , "Flash" , "Batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// console.log(marvel_heroes[3][1]);

// const all_heroes = marvel_heroes.concat(dc_heroes); // concat method returns a new array
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes , ...dc_heroes]; // we can perform this on more than 2 arrays , but concat can be performed only on 2 arrays

console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6] , 7 , [6,7 , [4,5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


// console.log(Array.isArray("divye"));
// console.log(Array.from("divye"));

console.log(Array.from({name: "Divye"})); // interesting

let score1 = 100;
let sore2 = 200;
let score3 = 300;

console.log(Array.of(score1 , score2 , score3));



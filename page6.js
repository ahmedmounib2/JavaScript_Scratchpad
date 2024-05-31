
// Use Destructuring Assignment to Assign Variables from Arrays
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);  // Outputs: 1 2 4

let f = 8, d = 6;
(() => {
  "use strict";
  [f, d] = [d, f];
})();

console.log(f);  // Outputs: 6
console.log(d);  // Outputs: 8


// use destructing Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


// Use Destructing Assignment to Pass an Object as a functions parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.07,
    min: -0.75,
    average: 35.85
};
const half = (function(){

    return function half({max, min}) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));


// create strings using Template literals
const person = {
    name: "Zodiac Hasbra",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! i am ${person.age} years old.`;

console.log(greeting);
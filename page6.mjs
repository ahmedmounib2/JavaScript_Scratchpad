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


const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i< arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

    return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 * `<li class="text-warning">var-on-top</li>`,
 * `<li class="text-warning">linebreak</li>`
 * ]
 */
const resultDisplayArrayone = makeList(result.failure);

console.log(resultDisplayArrayone);


// write Concise Object Literal Declarations Using simple fields
/**const createPerson = (name1, age, gender) => ( { name1, age, gender});
  {
    return {
        name: name1,
        age: age,
        gender: gender
    };
    
   

}; 
console.log(createPerson("Zodiac Hasbro", 56, "male" ));*/

const createPerson = (name1, age, gender) => ( { name1, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male" ));



// write Concise Declarative funnctions
/**const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);*/

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);


// Use Class Syntax to Define A Constructor Function
/**var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)*/


class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)



function makeClass (){
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


// Use getters and setters to Control Access to an Object
class Book {
    constructor(author){
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}


function createClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = createClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);


// difference between import and require
import { capitalizeString } from "./string_function.mjs"

const cap = capitalizeString("hello!");

console.log(cap);

/*
// Use Export to Reuse a Code Block
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString }; 

export const foo = "bar";
export const bar = "foo"; 
*/

/*
// Create an Export Fallback with export default
// function subtract(x,y) {return x - y;}
export default function subtract(x,y) {return x - y;}
*/

// import a default export
import subtract from "./string_function.mjs";

console.log(subtract(7,4));

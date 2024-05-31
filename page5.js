// Profile Lookup
var contacts = [
    {
      "firstname": "Akira",
      "lastname": "Laine",
      "number": "0843236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
      "firstname": "Harry",
      "lastname": "Potter",
      "number": "0943444543",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
      "firstname": "Sherlock",
      "lastname": "Holmes",
      "number": "0756933143",
      "likes": ["Intriguing Cases", "Violin"]
    },
    {
      "firstname": "Kristien",
      "lastname": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Dogs"]
    },
  
  ];
  
  
  function lookupProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++ ) {
      if (contacts[i].firstname === name) {
        return contacts[i][prop] || "No such property";
  
      }
    }
    return "No such contact";
  
  }
  
  var data =lookupProfile("Akira", "LastName");
  
  console.log(data)
  
  // Generate Random Fractions
  function randomFraction() {
  
  
    return Math.random();
  }
  
  console.log(randomFraction());
  
  
  // Generate Random Whole Numbers
  var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
  console.log(randomNumberBetween0and19);
  
  
  function randomWholeNumber() {
  
  
    return Math.floor(Math.random() * 10); // gives a random number between 0 and 9
  }
  
  console.log(randomWholeNumber());
  
  
  // Generate Random Whole Numbers Within a Range
  function ourRandomRange(ourMin, ourMax) {
  
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  console.log(ourRandomRange(1, 9));
  
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  
  }
  
  var myrange= randomRange(1, 15);
  console.log(myrange);
  
  
  // Use the parseInt Function
  function convertToInteger(str) {
    return parseInt(str) // return the string after converting it to into integer
  }
  
  convertToInteger("56");
  
  
  // Use the parseInt Function with a Radix
  function convertToInt(str) {
  
    return parseInt(str, 2) 
  
  }
  
  convertToInt("10011");


// Use the conditional (Ternary) Operator
// condition ? statement-if-true : statement-if-false;

// without ternary Operator
function checkEqual(a,b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}

// with ternary Operator
function checkEqual(a,b) {
    return a === b ? true : false;  // different way of writing return a === b;

}


// Use Multiple conditional (Ternary Operators)
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(-2));


// Differences between the var and let keywords
let catName = "Quincy";
let quote; 

catName = "Beau";

function catTalk() {
  "use strict";
  
  catName = "Oliver";
  quote = catName + " says Meow!"
  return quote;
} 

console.log(catTalk());


// compare scopes of the var and let keywords
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();



// Declare a Read Only Variable with the Const Keyword
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";

  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("Hello World!");


// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  // s = [2, 5, 7] cant re assign const , have to re assign each element as below
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;


}
editInPlace();

console.log(s);

// Prevent Object or Data Mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS); // Object.freeze prevents changes to the properties of MATH_CONSTANTS

  try {
    MATH_CONSTANTS.PI = 99; // Attempt to change the frozen property
  } catch (ex) {
    console.log("Error:", ex.message); // Log the error message
  }
  return MATH_CONSTANTS.PI; // Return the original value
}

const PI = freezeObj();
console.log("The value of PI is:", PI); // This will log 3.14


// Use Arrow fn to write Concise Anonymous functions
/*
var magic = function() {
  return new Data();
}; */

const magic = () => new Data();


// write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


// Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9,8, 3,14, 42, 6, 8.34, -2];

const squarelList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squarelList(realNumberArray);
console.log(squaredIntegers);


const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();


console.log(increment(5, 2));
console.log(increment(5));


// use the Rest Operator with Function Parameters
/*
const sum = (function() {
  return function sum(x, y , z) {
    const args = [ x , y , z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1 , 2 , 3));
*/

const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1 , 2 , 3, 4)); // now we can add any number of args


// Use the Spread Operator to Evaluate Arrays in-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1; 
  arr1[0] = 'potato'
})();
console.log(arr2);


const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
(function() {
  arr4 = [...arr3]; 
  arr3[0] = 'potato'
})();
console.log(arr4);


// Use Destructing Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x; //x = 3.6
var y = voxel.y // y = 7.4
var z = voxel.z // z = 6.54

const { x:a, y:b, z:c} = voxel; // a= 3.6, B= 7,4, C= 6.54


const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow} = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));


// Destructing Assignment with Nestted Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83},
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { tomorrow: {max: maxOfTomorrow }}= forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


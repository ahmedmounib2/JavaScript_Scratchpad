/* Data Types:
undefined, null , boolean, string, symbol, number, and object */


var myName = "Beau"; // defining a variable

myName = 8;  // changing var value

let ourName = "johnsmith";

const pi = 3.14; // once set can not be changed


var a; // defined var without assigning value

var b = 2;
console.log(a);  // checking value in the page or halfway through the project
a = 7;

b = a;

console.log(a);

// initialize these three variables

var a = 5;
var b = 10;
var c = "I am a ";

// do nt change code below this line

a = a + 1;
b = b + 5;
c = c + "String!";

console.log(a);
console.log(b);
console.log(c);

/*
// case sensitivity in variables

var StudLyJunioR;
var ProperSizeOFProduct;
var ProductPrice;


// Assignments

// will show an error as all variables are case sensitive.
STUDLYJUNIOR = 10;  
PROPERsizeofProduct = "A String";
productPriCe = 200;

*/

// adding numbers in JS

var sum = 10 + 0;
console.log(sum)

var ab = 10 + 10;
console.log(ab);

// subtracting numbers in JS

var difference = 45-33;  // 45-33 = 12
console.log(difference)

// Multiplication in JS
var product = 8 * 10;


// Division in JS
var quotient = 66/33;


// increments by 1
var myVar = 87;
myVar = myVar + 1;   // myvar = 88
// or
myVar++; // myvar = 88


// decrements by 1
var myVar = 11;
myVar = myVar - 1;  // = 10
// or
myVar--;  // = 10


var ourDecimal = 5.7;  // decimals or floats


// finding a remainder 
// % if remainder is 0 then the number is even
var remainder;
remainder = 11 % 3; // = 2 


var a = 3;
var b = 17;
var c = 12;

a = a + 12; // same as a += 12 
b += 9;
c += 7;

a = a - 6; // same as a -= 6; 

a = a * 5; // same as a *= 5 as a shortcut

a /= 2; // same as a = a / 2;

// strings as below
var firstName = "Alan";
var lastName = "Turing";

var myFirstName = "Beau";
var myLastName = "Carnes";


// escaping literal quotes
var myStr = "I am a \"double quoted\" string inside \"double quotes\""; // back slash to escape literal quotes like so  \" \"
console.log(myStr);

/*****
 \' single quote
 \" double quote
 \\ back slash
 \n new line
 \r carriage return
 \t tab
 \ backspace
 \f form feed 
 *****/
 
 var myStr = "Firstline\n\t\\Secondline\nThirdline";
 console.log(myStr);
 
 
 var ourStr = "I come first. " + "I come second. ";
 
 var myStr = "This is a start. " + " this is the end. ";
 console.log(myStr);
 
  ourStr += "I Come third";
  console.log(ourStr);
  
  
  var myStr = "This is the first sentence. ";
  myStr += "this is the second sentence";
  console.log(myStr);


var myName = "Beau";
var myStr = "My name is " + myName + " and i am good!";
console.log(myStr);

var anAdjective = "awesome!";
var ourStr = "Learning to code is ";
ourStr += anAdjective;
console.log(ourStr);

// finding lenght of a string 
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length; // using .length function = 3
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);


var firstLetterOfFirstName = "";
var firstName = "Ada";

// bracket notation to find Nth character in string
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName); // A


// string Immutability 
var myStr = "Jello World";
/*
myStr[0] = "H"; // trying to change the J to H in hellow world 
// the only way to fix it is to re-write it as below since strings are immutable 
*/
myStr = "Hello world";


// bracket notation to find last character in string
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)

var lastName = "Lovelace";
var lastLetterOflastName = lastName[lastName.length - 1];
console.log(lastLetterOflastName)


/* Page 2 */
/* Word Blanks */


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " to the store.";

  return result;
}


console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));


/*** Store multiple values with Arrays,
 can store multiple values from differet types of data
 Arrays example ***/ 
var ourArray = ["John", 23]; /* an array with a string and a number separated by a comma */

var myArray = ["Quincy", 1];

/* Nested Array or a multi dimensional is an Array within another Array as ex. below */
 var ourArray = [["The Universe", 42], ["everything", 101010]];

 var myArray = [["Bulls", 23], ["white sox", 45]];

/* Access Array Data with Indexes */
var ourArray = [50, 60, 70];
var ourData = ourArray[0];


var myArray = [50,60,70];


var myData = myArray[0];
console.log(myData)

/* Modify Array Data with Indexes */
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now = [18,45,99].

var myArray = [18,64,99];

myArray [0] = 45;
console.log(myArray)

// Acesss Multi Dimensional Arrays with indexes
var myArray = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];

var myData= myArray[0][0];
console.log(myData);

var myData= myArray[2][1];
console.log(myData);

// manipulate Arrays with Push
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.push(["happy", "Joy"]);
// ourArray now equals  ["Stimpson", "J", "Cat", ["happy", "Joy"]]


var myArray = [["John", 23], ["cat",2]];
myArray.push(["dog", 3])

// Manipulate Arrays with pop
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removed the last element from the array '3' now ourArray equals [1,2]

var myArray = [["John", 23], ["cat",2]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);

// Manipulate Arrays with Shift() , like pop but it removes the 1st element
var ourArray = ["Stimpson", "J", "Cat"];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray = "Stimpson" and ourArray equals ["J", "cat"]

var myArray = [["John", 23], ["cat",2]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);
console.log(myArray);

// Manipulate Arrays with unshift() function
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); // ourArray now equals ["Happy", "J", "cat"]


var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35])
console.log(myArray)

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

/* page 3 Functions 
write Reusable Code with Functions
*/
function ourReusableFunction() {
  console.log("Heyya", "World");
}

ourReusableFunction();  // this line calls the function and execute all the code between curly braces 

// ex.
function reusableFunction() {
  console.log("hi", "world");
}

reusableFunction();

// passing values to functions with arguments
function ourFunctionWithArgs(a,b) {
  console.log(a - b); // outputs 5
}

ourFunctionWithArgs(10,5);

function functionWithArgs(a,b) {
  console.log(a+b);
}

functionWithArgs(10,5);


// Global Scope and Functions 
var myGlobal = 10;

function fun1() {
  // assign 5 to oopsGlobal here
  oopsGlobal = 5;  // defined without var - automatically globaling the Variable
}


function fun2() {
  var output = "";
  if (typeof myGlobal !=  "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " "+"oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();

fun2();

// Local Scope and Functions
function myLocalScope() {
  var myVar1 = 5;
  console.log(myVar1);
}

myLocalScope();

// console.log(myVar1)  will give an error as myVar1 is not global scope
//as its a variable inside a function

/* Global Vs. Local Scope in Functions */ 
// local scope will take precedence over global scope in functions

var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";


  return outerWear;  
}

console.log(myOutfit());
console.log(outerWear);

// return a value from a Function with Return
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(100));

var changed = 0;

function change(num) {
  return (num +5) / 3;
}

changed = change(10);
console.log(changed)

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(10)
console.log(processed)


// Stand Inline

function nextInLine(arr, item) {
  arr.push(item);

  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr))


// Use Conditional Logic with If Statements
function ourTrueOrFalse(isItTrue) {
  if(isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

console.log(trueOrFalse(true));


// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) { // == equality operator
    return "Equal";
  } 
  return "Not Equal"
}


console.log(testEqual(10));
console.log(testEqual(12));


// Comparison with the Strict Equality Operator
/* 3 == 3 evaluates to true
3 === '3' evaluates to false as the strict equality operator dont do type conversions */
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(7)); // 7 will be true, but '7' will be false 

function compareEquality(a,b) {
  if (a == b) {
    return "a equals b";
  }
  return "a not equals b"
}

console.log(compareEquality(10, "10"));

function compareStrictEquality(c,d) {
  if (c === d) {
    return "c equals d";
  }
  return "c not equals d"
}

console.log(compareStrictEquality(10, "10")); 


// Comparison with inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));

// Comparison with stric inequality operator !==
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual("17"));


// Comparison with the Logical And Operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10));


// Comparison with the Greater Than or Equal to Operator
function testGreaterThanOrEqual(val) {
  if (val >= 20) {
    return "20 or Over"
  }
  if (val >= 10){
    return "10 or Over";
  }
  return "Less than 10";
}

console.log(testGreaterThanOrEqual(10));

// Comparison with the Logical And Operator &&
// nestedif test if value is less than or equal 50 and greater than or equal 25
function testLogicalAndNestedIf(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "Yes";
    }
  }
  return "No";
}

function testLogicalAndOperator(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";
    }
  return "No";
}
console.log(testLogicalAndOperator(10));
console.log(testLogicalAndNestedIf(10));


// comparisons with the Logical Or Operator ||
function testLogicalOr(val) {
  if (val <10 || val >20) {
    return "outside"
  }
  return "Inside"
}
console.log(testLogicalOr(15));

// Else Statements
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
console.log(testElse(100))

// Else If statements
function testElseIf(val) {
  if (val >10) {
    return "Greater Than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(11));
console.log(testElseIf(7));
console.log(testElseIf(3));

// Chaining If Else Statements
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num <10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(20));


// Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-Home!"]
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par -2) {
    return names[1]
  } else if (strokes == par -1) {
    return names[2]
  } else if (strokes == par ) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  } 
}

console.log(golfScore(5, 4));
console.log(golfScore(5, 2));
console.log(golfScore(5, 8));

/* Switch Statments
Switch statments Tests val and sets answer for following conditions
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1: // test if case === val
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break
    case 3:
      answer = "gamma";
      break
    case 4:
      answer = "delta";
      break
  }

  return answer;
}
console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));


// Default Option in Switch Statments - like else or else if statments 

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a": // test if case === val
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break
    case "c":
      answer = "cat";
      break
    default: // like else in switch statments
      answer = "Stuff";
      break;
  }

  return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff(2)); // return an empty string as 2 is not a set case, without editting default


// Multiple Identical Options in Switch Statments
function sequentialSizes(val) {
  var answer = "";
  switch(val){
    case 1:  // if its 1 2 or 3 we get low
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }
  return answer;
}

console.log(sequentialSizes(1));


// Returning Boolean Values from functions 
function isLess(a, b) {
  return a < b;
}
console.log(isLess(10,15));
console.log(isLess(20,15));


// returning Early Pattern from Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return "undefined";
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log(abTest(-2,2));


// Counting Cards
var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'

  
  }

  return count + " " + holdbet;

}

cc(2); cc('k'); cc(10); cc('K'); cc('A');

console.log(cc(4));


// build JavaScript Objects
var ourDog = {
  "name": "Toska",
  "legs": 3,
  "tail": 2,
  "friends": []
};

var myDog = {
  "name": "Bluffy",
  "legs": 4,
  "tail": 1,
  "friends": ["everything!"]
};

// Accessing Object Properties with Dot Notation
var testObj = {
  "hat": "ballcap",
  "shirt": "Jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(shirtValue);
var shoeValue = testObj['shoes']
console.log(shoeValue);
// Accessing Object Properties with Bracket Notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue);
console.log(drinkValue);

// Accessing Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// updating Object Properties
var ourDog = {
  "name": "Toska",
  "legs": 3,
  "tail": 2,
  "friends": []
};

ourDog.name = "Susu"; // now ourDog name is Susu and legs are 4
ourDog.legs = 4;

// add new properties to an object
ourDog['mood'] = "happy";

// delete properties from an object
delete ourDog.mood;

// Using Objects for Lookups
/*
function phonetickLookup(val) {
  var result = "";
  switch (val) {
    case "alpha": // test if case === val
      answer = "adams";
      break;
    case "bravo":
      answer = "boston";
      break
    case "charlie":
      answer = "chicago";
      break

  }

  return result;
}
*/


function phonetickLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "adams",
    "bravo": "boston",
    "charlie": "chicago"
  };
  result = lookup[val];

  return result;
}
console.log(phonetickLookup("charlie"));


// Testing Objects for Properties
var myObj = {
  gift: "pony",
  pet : "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not found"
  }
}
console.log(checkObj("gift"));


// manipulating complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": "true"
  },
  // add to the array here
  {
    "artist": "Beau",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "youtube video"
    ]
  }
];


// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
// trying to access the glovebox contents
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


// Accessing Nested Arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "palm",
      "pine",
      "birch"
    ]
  }
];
// access the second tree
var mySecondTree = myPlants[1].list[1];
console.log(mySecondTree);


// record collection
var collection = {
  "2548": {
    "album": "Slippery when wet",
    "artist": "Bon Jovi",
    "tracks": [
      "let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "Abba Gold"
  }
};
// keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }


  return collection;
}

updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", "Abba"));

// Iterate with wile Loops
var myArray = [];

var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

// Iterate with For Loops
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];


for (var i  = 1; i < 6; i++){
  myArray.push(i);
}

console.log(myArray);


// Iterate even Numbers with a For Loop
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);


// Iterate Odd Numbers with a For Loop
var myArray = [];

for (var i = 1; i < 11; i += 2){
  myArray.push(i);
}

console.log(myArray)


// count Bacwards with a For Loop
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 9; i > 0 ; i -= 2) {
  myArray.push(i);
}

console.log(myArray);


// Iterate Through an Array with a For Loop
var ourArray = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArray.length; i++) {
  ourTotal += ourArray[i];
}

console.log(ourTotal);

var total = 0;
var myArr = [ 2, 3, 4, 5, 6];

for (var i = 0; i < myArray.length; i++) {
  total += myArr[i];
}

console.log(total)


// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }


  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product)


// Iterate with Do .. while Loops
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5) 

console.log(i, myArray);

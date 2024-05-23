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

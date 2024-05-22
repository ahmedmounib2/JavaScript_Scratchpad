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



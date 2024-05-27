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










  
  
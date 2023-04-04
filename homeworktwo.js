// Create an array with 10 items

var carBrands = ["Ferrari", "BMW", "Toyota", "Honda", "Porsche"];
//  2.  Update one of the items

carBrands[1] = "Yellow";

console.log(carBrands);
//  3. Delete half of the array
var myColoursArray = ["red", "green", "blue", "black"];
myColoursArray.splice(2, 2);
console.log(myColoursArray);

//  4. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)

//  Pop
var myColoursArray = ["red", "green", "blue", "black"];

myColoursArray.pop();
console.log(myColoursArray);

//    Push
myColoursArray.push("red");
console.log(myColoursArray);

//    Shift
myColoursArray.shift();
console.log(myColoursArray);

//    Unshift
myColoursArray.unshift("pink");
console.log(myColoursArray);

//    Concatenating
myColoursArray = ["white", "brown", "magenta", "purple"];
var concatColours = myColoursArray.concat(myColoursArray);
console.log(concatColours);
//    Splicing

myColoursArray.splice(2, 1);
console.log(myColoursArray);

//    Slicing
myColoursCopy = myColoursArray.slice(2, 4);
console.log(myColoursCopy);

//    Reverse
myColoursArray.reverse();
myColoursArray.slice;

//    Join

var numbersJoin = [1, 2, 3, 4, 5];

console.log(numbersJoin.join());

//    forEach
var namesOfFriendsString = ["Carla", "Nabila", "Sofia", "Monica", "Majo"];
function resultEach() {
  console.log("My Friends are awesome");
}

namesOfFriendsString.forEach(resultEach);
//    Includes

console.log(namesOfFriendsString.includes("Carla"));

//    indexOf

console.log(myColoursArray.indexOf("red"));
//    Every

var namesOfPhones = [
  { name: "iphone" },
  { name: "samsung" },
  { name: "nokia" },
  { name: "huawei" },
];

var resultEveryPhone = namesOfPhones.every(everyResult);

function everyResult(item) {
  return item.name === "iphone";
}

console.log(resultEveryPhone);

//    Some

var someOfPhones = namesOfPhones.some(some);

function some(item) {
  return item.name === "iphone";
}

console.log(someOfPhones);
//    Filter
var filterOfPhones = namesOfPhones.filter(filterPhones);

function filterPhones(item) {
  return item.name === "iphone";
}
//    Find
var numbersFind = [1, 2, 3, 4, 5];
var findNumber = numbersFind.find(numberfound);

function numberfound(item) {
  return item === 2;
}

console.log(findNumber);
//    findIndex

var namesOfNumero = [{ num: 1 }, { num: 2 }, { num: 3 }];

var indexOfNum = namesOfNumero.findIndex(numHandler);

function numHandler(item) {
  return item.num === 3;
}

console.log(namesOfNumero[indexOfNum]);
//    Sort
var sortOfNumbers = [1, 2, 3, 22, 111, 2, 3, 99, 111111, 232, 45, 2, 2, 4];

function sorted(one, two) {
  if (one > two) return 1;
  if (one < two) return -1;
}

sortOfNumbers.sort(sorted);

console.log(sortOfNumbers);
//    Map
var mapOfPhones = namesOfPhones.map(mapPhones);

function mapPhones(item) {
  return item.name;
}

console.log(mapOfPhones);

// 1.	Create a function, inside the function add a second function, and again add a third function into the second function.

function phoneFunctions() {
  const namesOfPhones = [
    { name: "iphone" },
    { name: "samsung" },
    { name: "nokia" },
    { name: "huawei" },
  ];

  function displayNames() {
    console.log("Phone Names:");
    namesOfPhones.forEach((phone) => console.log(phone.name));
  }

  function addPhone(name) {
    namesOfPhones.push({ name });
    console.log(`Added ${name} to list of phones.`);
    displayNames();
  }

  displayNames();
  addPhone("motorola");
}

phoneFunctions();

// 2.	Create 3 variables.
// 3.	Define 3 the variables in the correct place so that:
// a.	The first variable is accessible inside every function.
// b.	The second variable is accessible inside the second and third function only.
// c.	The third variable is accessible inside the third function only.
// 4.	Define a 4th variable inside the 3rd function. This variable should be accessible by every function.
// 5.	Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.

function exampleFunction1() {
  var variable1 = "accessible everywhere";
  console.log(variable1);
}

function exampleFunction2() {
  var variable2 = "accessible in function 2 and 3 only";
  console.log(variable2);

  function exampleFunction3() {
    var variable3 = "accessible in function 3 only";
    console.log(variable3);

    if (true) {
      var scopedVariable = "only accessible inside this scope";
      console.log(scopedVariable);
    }

    function exampleFunction4() {
      console.log(variable2); // can access variable2
      console.log(variable3); // can access variable3
    }

    exampleFunction4();
  }

  exampleFunction3();
}

exampleFunction1(); // accessible everywhere
exampleFunction2(); // accessible in function 2 and 3 only, accessible in function 3 only (from exampleFunction3)

// 6.	Create an object which contains a function which console.logs this.something, where something is any name you like.
var myObject = {
  something: "Hello, World!",
  logSomething: function () {
    console.log(this.something);
  },
};

myObject.logSomething(); // Logs "Hello, World!"

// 7. Create an object that contains information about the make/model of a car
var car = {
  make: "Ferrari",
  model: "Kia",
};

console.log(car.make); // Logs "Toyota"
console.log(car.model); // Logs "Corolla"

// 8. Create a function outside the object which returns the make/model of the car

function getCarMakeAndModel(carObject) {
  return carObject.make + " " + carObject.model;
}

console.log(getCarMakeAndModel(car)); // Logs "Toyota Corolla"

// 9. Insert a reference to the function into the object created

// 10. Invoke the method on the object (you should see the make/model)
// 11. Use call to execute the function using a different context
// 12. Use bind to create an instance of the function that is bound to a different object
// 13. Use a try/catch block to ensure you understand the syntax
var carssss = {
  make: "Toyota",
  model: "Corolla",
};

function getMakeAndModel(car) {
  if (!car.make || !car.model) {
    throw new Error("Car make and model must be provided");
  }
  return car.make + " " + car.model;
}

try {
  const makeAndModel = getMakeAndModel(car);
  console.log(makeAndModel); // Logs "Toyota Corolla"
} catch (error) {
  console.error(error.message); // Logs "Car make and model must be provided"
}

// 14. Create a timer that runs once
function runOnce() {
  console.log("This timer runs once.");
}

setTimeout(runOnce, 5000); // Runs the function after 5 seconds (5000 milliseconds)

// 15. Create a timer that runs many times

let counter = 0;

function runManyTimes() {
  console.log(`This timer runs ${counter} times.`);
  counter++;
}

const intervalId = setInterval(runManyTimes, 1000); // Runs the function every 1 second (1000 milliseconds)

// 16. Clear one of the timers
clearInterval(intervalId); // Clears the interval timer

// 17. Use a ternary (edited)
var num = 10;
var result = num % 2 === 0 ? "even" : "odd";
console.log(result); // "even"

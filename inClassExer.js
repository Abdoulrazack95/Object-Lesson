//Object Exercise 1 Correction

/* Describe Your own laptop */

/* =========================================== */

//Object Exercise 2 Correction

/* 5 things of Real World */

/* =========================================== */

//Object Exercise 3 Correction

// let kitten = {
//     furColour: "orange",
//     age: "23",
// };

// let laptop = {
//     brand: "Lenovo",
//     ram: "5GB"
// }

// let phone = {
//     operating: "system iOS",
//     hasStylus: true,
//     megapixels: 12,
//     batteryLife: 24,
// }

/* =========================================== */

//Get Value of a property Exercise 1 Correction

/*
Console.log the values of each property of "kitten"
*/

// let kitten = {
//     ageMonths: 3,
//     isFemale: true,
//     furColour: "brown",
// };

// console.log(kitten.ageMonths, kitten.isFemale, kitten.furColour)

/* =========================================== */

//Get Value of a property Exercise 2 Correction

/*
The following code contains syntax errors - try and fix them!
Once you fix them, run the code, it should output the correct values!
*/

// let phone = {
//     brand: 'iPhone',
//     model: 'iPhone X',
//     launchYear: 2017,
//     isUnlocked: true
// }

// let phoneBrand = phone.bbrand;
// let phoneLaunchYear = phone["launchYear"];

// console.log(phoneBrand);
// console.log(phoneLaunchYear);

// -> it should output:
// iPhone
// 2017

/* =========================================== */

// Updating a value of an Object's property Exercise 1 Correction

/*
Write code in the space provided so that it outputs "Gilbert"
*/

// WRITE CODE BELOW THIS
// let kitten = {
//     name:"Gilbert"
//  }
// // WRITE CODE ABOVE THIS

// console.log(kitten.name);
// -> it should output: "Gilbert

/* =========================================== */

// Updating a value of an Object's property Exercise 2 Correction

/*
Write code in the space provided so that the expected values output
*/

// let dog = {
//     name: "Billy",
//     wantsToPlay: false,
// };

// // WRITE CODE BELOW THIS LINE
// dog.name = "Rex";
// dog.wantsToPlay = true;
// // WRITE CODE ABOVE THIS LINE

// console.log(dog.name);
// console.log(dog.wantsToPlay);

// -> it should output:
// Rex
// true

/* =========================================== */

// More Cpmplex Object Exercise 1 Correction

/*
Given the following house - follow the instructions below.

Make sure you run the file after and it outputs the correct results.
*/

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//         firstName: "Margaret",
//         lastName: "Conway",
//     },
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// house.address = '51 Berkley Road';
// house.previousOwners = ["Brian M.", "Fiona S."];
// house.currentOwner.lastName = "Montgomery"

// // - change the address of "house" to '51 Berkley Road'
// // - change the previous owners of "house" to ["Brian M.", "Fiona S."]
// // - change the last name of the current owner of "house" to "Montgomery"

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//     `Expected result: 51 Berkley Road. Actual result: ${house.address}`
// );
// console.log(
//     `Expected result: Brian M., Fiona S. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(
//     `Expected result: Montgomery. Actual result: ${house.currentOwner.lastName}`
// );


/* =========================================== */

// More Complex Object Exercise 2 Correction

/*
Given the same "house" object again

Follow the instructions below and then run the file and make sure it outputs the correct results
*/

// let house = {
//     address: "1 Kinning Park",
//     previousOwners: ["Claire M.", "John A."],
//     currentOwner: {
//         firstName: "Margaret",
//         lastName: "Conway",
//     },
// };

// let newCurrentOwner = {
//     firstName: "Georgina",
//     lastName: "Hernandez",
// };

// /*
//   DO NOT EDIT ANYTHING ABOVE THIS LINE

//   WRITE YOUR CODE BELOW
// */

// house.currentOwner = newCurrentOwner;
// house.previousOwners[1] = "Stephen B.";
// house.isForSale = false;

// // - assign the value of the variable 'newCurrentOwner' as the value to the house's "currentOwner"
// // - from the list of previous owners, replace only "John A." with "Stephen B."
// // - give the house a new property called 'isForSale' with the value 'false'

// /*
//   DO NOT EDIT ANYTHING BELOW THIS LINE
// */
// console.log(
//     `Did you correctly assign the new owner using the given variable?","Expected result: true. Actual result: " ${
//     house.currentOwner === newCurrentOwner
//     }`
// );
// console.log(
//     `Expected result: Claire M., Stephen B. Actual result: ${house.previousOwners.toString()}`
// );
// console.log(`Expected result: false. Actual result: ${house.isForSale}`);

/* ======================================== */

// Objects Method Exercise 1 Correction

/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

// let person = {
//     name: "Alice",
//     age: 25,
//     greet(){
//         return "Hello everybody"
//     },
//     sayName: function () {
//         return "My name is " + this.name
//     }
// };


// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// console.log(
//     `Expected result: Hello everybody. Actual result: ${person.greet()}`
// );
// console.log(
//     `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
// );

/* ============================================ */

// Objects Methods Exercise 2 Correction

/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

// let person = {
//     name: "Alice",
//     age: 25,
//     currentAddress: "Glasgow",
//     changeAddress: function (newAddress) {
//         this.currentAddress = newAddress;
//     },
//     celebrateBirthday: function() {
//         this.age = this.age + 1;
//     }
// };

// person.changeAddress("North West");
// console.log(`Expected result: North West. Actual result: ${person.currentAddress}`);

// person.celebrateBirthday();
// console.log(`Expected result: 26. Actual result: ${person.age}`);

/* ======================================== */

// Object Method Exercise 3 Correction

/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

// let person = {
//     name: "Alice",
//     friends: ["John", "Nina"],
//     makeFriend(newFriend) {
//         this.friends.push(newFriend)
//     }
// };

// /*
// DO NOT EDIT ANYTHING BELOW THIS LINE
// */

// person.makeFriend("Bob");

// console.log(
//     `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
// );
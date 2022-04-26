// console.log(`hello typescript`);
// var version = `es6`;
// console.log(`hello ${version} typescript`);
// console.log("hello world");

// var myString: string = "this is a string";
// var myBoolean: boolean = true;
// var myNumber: number = 2;
// var myStringArray: string[] = ["first", "second", "third"];

// // inferred typing
// // typescript use a a technique called inferred typing or type inference
// var inferredString = "this sis a string";
// var inferredNumber = 1;
// // inferredNumber = inferredString;

// //duck typing
// // if it looks like a duck, and quacks like a duck, then it's probably a duck.
// // two variables are considered to have the same type if they have same properties and methods

// var nameIdObject = { name: "myName", id: 1, print() {} };
// nameIdObject = { id: 2, name: "anotherName", print() {} };
// nameIdObject = { id: 3, name: "thirdName", print() {} };

// var obj1 = { id: 1, print() {} };
// var obj2 = { id: 2, print() {}, select() {} };
// obj1 = obj2;
// // obj2 = obj1;
// /**
//  * This is a one liner documentation
//  * Represents calculation function.
//  * @constructor
//  * @param {string} title-The title of the book
//  *@param {string} author - The author of the book
//  * */
// function calculate(a: number, b: number, c: number): number {
//   return a * b + c;
// }
// console.log("calculate() = " + calculate(2, 3, 1));
// //typescript language service
// // build up code complition hints or intellisense
// console.log(`myNumber = ${myNumber}`);

// // declare keyword
// // declare keyword is being used to prefix a variable names inquirer.
// // declare keyword tells the typescript compiler that there is an object named inquirer that is provided by the library
// // declare var inquirer: inquirer.Inquirer;
import * as inquirer from "inquirer";
inquirer
  .prompt([{ name: "first_name", message: "What is your name?" }])
  .then((answers) => {
    console.log(`You answered : ${answers.first_name}`);
  });

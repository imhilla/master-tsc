"use strict";
// console.log(`hello typescript`);
// var version = `es6`;
// console.log(`hello ${version} typescript`);
// console.log("hello world");
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
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
const inquirer = __importStar(require("inquirer"));
inquirer
  .prompt([{ name: "first_name", message: "What is your name?" }])
  .then((answers) => {
    console.log(`You answered : ${answers.first_name}`);
  });
//# sourceMappingURL=hello_typescript.js.map

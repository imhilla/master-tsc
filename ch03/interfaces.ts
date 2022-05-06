interface IIdName {
  id: number;
  name: string;
}
let idObject: IIdName = {
  id: 2,
  name: "This is the name",
};

interface IOptional {
  id: number;
  name?: string;
}

let optionalID1: IOptional = {
  id: 1,
};
let optionalID2: IOptional = {
  id: 2,
  name: "Optional name",
};
// interface naming
interface IWeakType {
  id?: number;
  name?: string;
  description: string;
}

let weakTypeNoOverlap: IWeakType = {
  description: "a description",
};
// the in operator
interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
  if ("id" in obj) {
    console.log(`obj.name${obj.name}`);
  }
  if ("descr" in obj) {
    console.log(`obj.descr${obj.descr}`);
  }
}
printNameOrValue({ id: 1, name: "nameValue" });
printNameOrValue({ descr: "description", value: 2 });

//keyof
interface Iperson {
  id: number;
  name: string;
}

type PersonPropertyName = keyof Iperson;
//equivalent to string literal
type PersonPropertyLiteral = "id" | "name";

function getProperty(key: PersonPropertyName, value: Iperson) {
  console.log(`${key} = ${value[key]}`);
}
getProperty("id", { id: 1, name: "first name" });
getProperty("name", { id: 2, name: "seconn" });

// classes
class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.print() called ${this.id}`);
  }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.print();

//implementing interfaces

interface IPrint {
  print(): void;
}
class ClassA implements IPrint {
  print(): void {
    console.log(`ClassA.print() called.`);
  }
}
class ClassB implements IPrint {
  print(): void {
    console.log(`ClassB.print() called`);
  }
}

let classA = new ClassA();
let classB = new ClassB();

function printClass(a: IPrint) {
  a.print;
}

printClass(classA);
printClass(classB);
// class constructors

class ClassWithConstructor {
  id: number;
  constructor(id: number) {
    this.id = id;
  }
}

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);
// class modifiers
class ClassEs6Private {
  #id: number;
  constructor(id: number) {
    this.#id = id;
  }
}

let es6PrivateClass = new ClassEs6Private(10);
interface IBase {}
interface IDerivedFromBase {}

class BaseClass implements IBase {
  id: number = 0;
}
class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
  name: string = "Namestring";
}

//implementing multiple interfaces
interface IFirstInterface {
  id: number;
}

interface ISecondInterface {
  name: string;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
  id: number = 0;
  name: string = "name string";
}

class BaseConstructor {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class DerivedClassWithCtor extends BaseConstructor {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}
// function overriding
class BaseClassWithFn {
  print(text: string) {
    console.log("Base class fn with print");
  }
}

class DerivedClassFnOverride extends BaseClassWithFn {
  print(text: string): void {
    console.log(text);
  }
}

let derivedClassOverride = new DerivedClassFnOverride();
derivedClassOverride.print("test word");

// generics
/*
 * a way of writing code that will work with a wide range of objects and primitives
 *
 * using generics can force each element of the array to be of the same type
 * and there fore would not allow a mixed list of values to be sent through our function
 */

/*
 *
 *Generic syntax
 typescript uses angle bracket <> and a type symbol to indicate that we are using generic
 */
function printGeneric<T>(value: T) {
  console.log(`typeof T is : ${typeof value}`);
  console.log(`value is : ${value}`);
}
/**
 * we have replaced the type within function definition  which
 * would normally be value string or number with the generic syntax value T
 *
 *
 * */
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => {});
printGeneric({ id: 1 });

/**
 * Here we are using type casting notation that is angle brackets <type>
 * to explicitly set the type using this long form notation
 * **/
printGeneric<string>("test");

/**
 * Multiple generic types
 * we can also specify more than one type to be used in a generic function
 * */
function usingTwoTypes<A, B>(first: A, second: B) {}
// this function can specify any type of either A or B for example
usingTwoTypes<number, string>(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
usingTwoTypes("first", "second");
// here we are freely mixing the syntax to call the usingTwoTypes function.

/**
 * constrainign the type of T
 *
 * **/

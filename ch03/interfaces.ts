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
  // function overriding
}
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
 * in most instances we will want to limit the type of T in order to
 * only allow a specific set of types to be used within our generic code
 * **/

class Concatenator<T extends Array<string> | Array<number>> {
  public concatenateArray(items: T): string {
    let returnString = "";
    for (let i = 0; i < items.length; i++) {
      returnString += i > 0 ? "," : "";
      returnString += items[i].toString();
    }
    return returnString;
  }
}

let concator = new Concatenator();
let concatResult = concator.concatenateArray(["first", "second", "third"]);
concatResult = concator.concatenateArray([1000, 2000, 3000]);
console.log("concatResultc", concatResult);

interface IPrintId {
  id: number;
  print(): void;
}
interface IPrintName {
  name: string;
  print(): void;
}

function useT<T extends IPrintId | IPrintName>(item: T): void {
  item.print();
  // item.id = 1; // error : id is not common
  // item.name = "test"; // error : name is not common
}

/**
 *
 * Generic constraints
 * a generic type can be constructed out of another generic type
 * this technique essentially uses one type to apply a contraint on another type
 *
 * **/

function printProperty<T, K extends keyof T>(object: T, key: K) {
  let propertyValue = object[key];
  console.log(`object[${key}] = ${propertyValue}`);
}

let object1 = {
  id: 1,
  name: "my name",
  print() {
    console.log(`${this.id}`);
  },
};
printProperty(object1, "id");
printProperty(object1, "name");
// printProperty(object1, "surname");

/**
 * Generic interfaces
 * in the same way that fucntions and classes can use generics, we are able to create
 * interfaces that use generic syntax
 **/

interface IPrint {
  print(): void;
}

interface ILogInterface<T extends IPrint> {
  logToConsole(iPrintObj: T): void;
}

class LogClass<T extends IPrint> implements ILogInterface<T> {
  logToConsole(iPrintObj: T): void {
    iPrintObj.print();
  }
}

let printObject: IPrint = {
  print() {
    console.log(`printObject.print() called`);
  },
};

let logClass = new LogClass();
logClass.logToConsole(printObject);

/**
 * creating new objects with generics
 *
 * **/
class ClassAA {}
class ClassBB {}

function createClassInstance<T>(arg1: { new (): T }): T {
  return new arg1();
}

let createAInstance = createClassInstance(ClassAA);

/**
 * Advanced type interfaces
 * conditional types
 * inferred types
 * mapped types
 * **/

/**
 * mapped types
 * **/
interface IAbRequired {
  a: number;
  b: string;
}

let ab: IAbRequired = {
  a: 1,
  b: "test",
};

type WeakInterface<T> = {
  [K in keyof T]?: T[K];
};

let allOptional: WeakInterface<IAbRequired> = {};
/**
 *  partials read-only record and pick
 *
 * **/
/**
 * make all properties in T optional
 *
 *  **/
type PartialE<T> = {
  [P in keyof T]?: T[P];
};

/**
 * make all properties in T readonly
 * **/
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

let readOnly: ReadOnly<IAbRequired> = {
  a: 0,
  b: "",
};

// readOnly.a = 2;

/**
 * Pick
 * pick mapped types is used to construct a type based on a subset of
 * properties of another type
 * **/
interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObj: PickAb = {
  a: 1,
  b: "test",
};

/**
 * Record
 * used to construct a type on the fly.
 * almost the opposite of the Pick mapped type and uses a provoded list of properties
 * as a string literal to define what properties the type must have
 * **/
type RecordedCd = Record<"c" | "d", number>;
let recordedCdVar: RecordedCd = {
  c: 1,
  d: 3,
};

/**
 * conditional types
 **/
type NumberOrString<T> = T extends number ? number : string;

function logNumberOrString<T>(input: NumberOrString<T>) {
  console.log(`logNmunerOrString: ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");
// logNumberOrString<boolean>(true);

/**
 * conditional type chaining
 * **/
interface IA {
  a: number;
}
interface IAb {
  a: number;
  b: string;
}

interface IAbc {
  a: number;
  b: string;
  c: boolean;
}

type abc_ab_a<T> = T extends IAbc
  ? [number, string, boolean]
  : T extends IAb
  ? [number, string]
  : T extends IA
  ? [number]
  : never;

function getTupleStringAbc<T>(tupleValue: abc_ab_a<T>): string {
  let [...tupleDestructured] = tupleValue;
  let returnString = "|";
  for (let value of tupleDestructured) {
    returnString += `${value}`;
  }
  return returnString;
}

let keyA = getTupleStringAbc<IA>([1]);
let keyB = getTupleStringAbc<IAb>([1, "test"]);
let keyC = getTupleStringAbc<IAbc>([1, "test", true]);
/**
 * Distributed conditional types
 * when defining conditional types instead of returning only a single type as part of our
 * conditional statements, we can also return a number of types or distributed conditional types
 *
 **/
type dateOrNumberOrString<T> = T extends Date
  ? Date
  : T extends number
  ? Date | number
  : T extends string
  ? Date | number | string
  : never;
function compareValues<T extends string | number | Date | boolean>(
  input: T,
  compareTo: dateOrNumberOrString<T>
) {
  // do comparison
}

/**
 *  conditional type inference
 **/
type inferFromPropertyType<T> = T extends { id: infer U } ? U : never;
function testInferFromPropertyType<T>(arg: inferFromPropertyType<T>) {}
testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);

/**
 * type inferences from function signatures
 * in the same way that we can define inferred types based on object properties
 * we can also infer types based on function signatures.
 * these inferred types can be inferred from either the function arguments or from the
 * return type
 * **/
type inferredFromFnParam<T> = T extends (a: infer U) => void ? U : never;
function testInferredFromParam<T>(arg: inferredFromFnParam<T>) {}
testInferredFromParam<(a: number) => void>(1);
testInferredFromParam<(a: string) => void>("test");

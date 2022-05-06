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

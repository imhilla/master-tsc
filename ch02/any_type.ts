/**
 * any, let, unions, and enums use any to remove typescript strict type checking
 *
 */
var item1: any = { id: 1, name: "item 1" };
item1 = { id: 2 };
/**
 * Simply Find an Interface for Any Type SFIAT
 * the any type can and shoul be defined as an Interface
 * */

/**
 * Explicit casting
 * Explicitly defining the type of an object
 * in this function we have replaced the :any
 * type specifier on the left hand side of the assignment operator with an explicit cast of
 * <any> on the right handside of the assignmet operator.
 * explicit casting uses the angle brackets syntax, that is < and >
 * */
var item2 = <any>{ id: 1, name: "item2" };
item2 = { id: 2 };

/**
 * Another variant of this casting technique is to use the as keyword
 *
 * */
var item3 = { id: 1, name: "item3" } as any;
item3 = { id: 2 };

let index: number = 0;
if (index == 0) {
  let index: number = 2;
  console.log(`index = ${index}`);
}
/**
 * const values
 *
 * */
const constValue = "This should not be changed";

/**
 * Union types
 *Typescript allows us to express a type as a combination of two or more types
 */
function printObject(obj: string | number) {
  console.log(`obj = ${obj}`);
}

printObject(1);
printObject("String value");

/**
 *Type guards
 When working with union types, the compiler will still apply its
 strong typing rules to ensure type safety.
 Atype guard is an expression that performs a check on our type and then guarantees 
 that type within scope
 * */
function addWithUnion(arg1: string | number, arg2: string | number) {
  if (typeof arg1 === "string") {
    // arg1 is treated ad a string
    console.log(`arg1 is of type string`);
    return arg1 + arg2;
  }
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    // both are numbers
    console.log(`arg1 and arg2 are both numbers`);
    return arg1 + arg2;
  }
  console.log(`default return treat both as a string`);
  return arg1.toString() + arg2.toString();
}
console.log(` "1", "2" = ${addWithUnion("1", "2")}`);
console.log(`  1 ,  2  = ${addWithUnion(1, 2)}`);
console.log(`  1 , "2" = ${addWithUnion(1, "2")}`);

/**
 * Type Aliases
 * Typescript introduces the concept of type alias, where we can create a named
 * type that can be used as a substitute for any type union.
 * Use the type keyword
 * Type aliases are a handy way of specifying a type union and giving it a name and are
 * particularly useful when the type union is used over and over again
 * **/

type StringOrNumber = string | number;
function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
  return arg1.toString() + arg2.toString();
}

/**
 * Enums
 * Using enums help us to provide a clear set of values for a variable or function parameter
 **/

enum DoorState {
  Open,
  Closed,
}

function checkDoorState(state: DoorState) {
  console.log(`enum value is :${state}`);
  switch (state) {
    case DoorState.Open:
      console.log(`Door is Open`);
      break;
    case DoorState.Closed:
      console.log(`Door is closed`);
      break;
  }
}
/**
 * The correct way to call this function is by using on of the values that DoorState enum provides
 *
 * **/
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

/**
 * We can set the numerical values of an enum value to whatever we
 * like
 * **/
enum DoorStateSpecificValues {
  Open = 3,
  Closed = 7,
  Unspecified = 256,
}

enum StaffDepartments {
  HR,
  Finance,
  Tech,
  CustomerExperience,
}

function LogDepartments(department: StaffDepartments) {
  console.log(department);
  switch (department) {
    case StaffDepartments.HR:
      console.log("Department is " + "hr");
      break;
    case StaffDepartments.CustomerExperience:
      console.log("Department is " + "customer experince");
      break;
    case StaffDepartments.Tech:
      console.log("Department is tech" + " team");
  }
}
LogDepartments(StaffDepartments.HR);
LogDepartments(StaffDepartments.CustomerExperience);
LogDepartments(StaffDepartments.Tech);
/**
 * using enums help us to provide a clear set of values for a variable or function parameter
 * **/

/**
 * string enums
 * **/

enum DoorStateString {
  OPEN = "Open",
  CLOSED = "Closed",
}

console.log(`OPEN = ${DoorStateString.OPEN}`);

/**
 * The final variant of the enum familty is the
 *  constant enum
 * **/

const enum DoorStateConst {
  open = 10,
  closed = 20,
}
console.log(`Const closed = ${DoorStateConst.closed}`);

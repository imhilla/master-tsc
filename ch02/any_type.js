"use strict";
/**
 * any, let, unions, and enums use any to remove typescript strict type checking
 *
 */
var item1 = { id: 1, name: "item 1" };
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
var item2 = { id: 1, name: "item2" };
item2 = { id: 2 };
/**
 * Another variant of this casting technique is to use the as keyword
 *
 * */
var item3 = { id: 1, name: "item3" };
item3 = { id: 2 };
let index = 0;
if (index == 0) {
    let index = 2;
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
function printObject(obj) {
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
function addWithUnion(arg1, arg2) {
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
function addWithTypeAlias(arg1, arg2) {
    return arg1.toString() + arg2.toString();
}
/**
 * Enums
 * Using enums help us to provide a clear set of values for a variable or function parameter
 **/
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
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
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
/**
 * We can set the numerical values of an enum value to whatever we
 * like
 * **/
var DoorStateSpecificValues;
(function (DoorStateSpecificValues) {
    DoorStateSpecificValues[DoorStateSpecificValues["Open"] = 3] = "Open";
    DoorStateSpecificValues[DoorStateSpecificValues["Closed"] = 7] = "Closed";
    DoorStateSpecificValues[DoorStateSpecificValues["Unspecified"] = 256] = "Unspecified";
})(DoorStateSpecificValues || (DoorStateSpecificValues = {}));
//# sourceMappingURL=any_type.js.map
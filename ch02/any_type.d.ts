/**
 * any, let, unions, and enums use any to remove typescript strict type checking
 *
 */
declare var item1: any;
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
declare var item2: any;
/**
 * Another variant of this casting technique is to use the as keyword
 *
 * */
declare var item3: any;
declare let index: number;
/**
 * const values
 *
 * */
declare const constValue = "This should not be changed";
/**
 * Union types
 *Typescript allows us to express a type as a combination of two or more types
 */
declare function printObject(obj: string | number): void;
/**
 *Type guards
 When working with union types, the compiler will still apply its
 strong typing rules to ensure type safety.
 Atype guard is an expression that performs a check on our type and then guarantees
 that type within scope
 * */
declare function addWithUnion(arg1: string | number, arg2: string | number): string | number;
/**
 * Type Aliases
 * Typescript introduces the concept of type alias, where we can create a named
 * type that can be used as a substitute for any type union.
 * Use the type keyword
 * Type aliases are a handy way of specifying a type union and giving it a name and are
 * particularly useful when the type union is used over and over again
 * **/
declare type StringOrNumber = string | number;
declare function addWithTypeAlias(arg1: StringOrNumber, arg2: StringOrNumber): string;
/**
 * Enums
 * Using enums help us to provide a clear set of values for a variable or function parameter
 **/
declare enum DoorState {
    Open = 0,
    Closed = 1
}
declare function checkDoorState(state: DoorState): void;
/**
 * We can set the numerical values of an enum value to whatever we
 * like
 * **/
declare enum DoorStateSpecificValues {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}
declare enum StaffDepartments {
    HR = 0,
    Finance = 1,
    Tech = 2,
    CustomerExperience = 3
}
declare function LogDepartments(department: StaffDepartments): void;
/**
 * using enums help us to provide a clear set of values for a variable or function parameter
 * **/
/**
 * string enums
 * **/
declare enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed"
}
/**
 * The final variant of the enum familty is the
 *  constant enum
 * **/
declare const enum DoorStateConst {
    open = 10,
    closed = 20
}

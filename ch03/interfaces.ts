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

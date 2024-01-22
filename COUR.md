### install

```sh
npm i -g typescript
```

### compile

```sh
tsc filename.ts ## fileExtension .ts
```

### watch mode

```sh
tsc -w filename.ts
```

### tsconfig.json file

```json
"rootDir": "./src" /* Specify the root folder within your source files. */,
"sourceMap": true /* Create source map files for emitted JavaScript files. */,
"outDir": "./dist" /* Specify an output folder for all emitted files. */
"removeComments": true /* Disable emitting comments. */,
```

```sh
# edit
tsc -w # instead of tsc -w filename.ts
tsc # instead of tsc filename.ts
```

### type annotation

```ts
// this will throw an error
function addition(nOne: number, nTwo: number) {
	return nOne + nTwo;
}
addition(1, "5");
////

// to annotate unexpected type of data
let x: any;
x = 1;
x = "sisttara";
///
```

NOTE :

<pre>
if we don't annotate the type, the compiler will detect it.
</pre>

### Type annotation & Arrays

```ts
// that's allow us to go back to the dynamic declaration
let all: string | number | boolean = 0;

all = "hello";
all = 1;
all = false;
///

// define that the array is list of special type

let list: string[];

list = ["hello", "world", 1];
```

### Type Annotations with multidimensional Arrays

```ts
let mixteArray: (string | number | (number | number[])[])[] = [
	"A",
	"B",
	"C",
	[1, 2, [3]],
	4,
	5,
	6,
];
```

### Anotation in Functions

#### Type Annotations with Functions

```ts
"noImplicitAny": true, /* Enable error reporting for expressions and declarations with an implied 'any' type. */
"noImplicitReturns": true, /* Enable error reporting for codepaths that do not explicitly return in a function. */
"noUnusedLocals": true, /* Enable error reporting when local variables aren't read. */
"noUnusedParameters": true, /* Raise an error when a function parameter isn't read. */
"allowUnreachableCode": false, /* Disable error reporting for unreachable code. */
"preserveConstEnums": true, /* Disable erasing 'const enum' declarations in generated code. */

// execution
let isTruthy: boolean = true;

function showDetails(name: string, age: number, assignment: string): string {
	if (isTruthy) {
		return `Your name ${name}, age ${age}, assignment ${assignment}`;
	}
	return `retruned Value`;
}

showDetails("Yassine", 20, "Doctor");
```

#### Functions Default params & optional params

```js
function showDetails(
	name: string = "Sisttara",
	age: number,
	assignment: string
) {
	return `${name} - ${age} - ${assignment}`;
}

showDetails("Yassine", 20, "Doctor");

/*
Optional Param: assingement"?"
cant be followed by mandatory param

default value: name: string = "Sisttara"

skipt a param when calling a function

showDetails("Yassine", undefined, "Doctor")
*/
```

#### Rest params

```ts
/*
respt params are suitable in typeScript
floating numbers are ALSO Numbers
*/
function addFn(...args: number[]): number {
	return args.reduce((prev, curr) => prev + curr, 0);
}
console.log(addFn(1, 2, 3, 4, 15));
```

#### Anonymous & Arrow functions

```ts
const addOne = function (nOne: number, nTwo: number): number {
	return nOne + nTwo;
};
const addTwo = (nOne: number, nTwo: number): number => {
	return nOne + nTwo;
};
```

### Data Types

#### Type Aliases

```ts
type str = string;
type strandnum = string | number;

const name: str = "abslam";
const exec: strandnum = "abslam";
exec = 09;
```

#### Advanced Usage

```ts
// Type Aliases

type shiftObj = {
	up: string;
	right: string;
	down: string;
	left: string;
};

type otherObj = shiftObj & {
	isCenter: boolean;
};

const fn = (otherObj: otherObj) => {
	return otherObj;
};
fn({
	up: "Jumps",
	right: "go right",
	down: "go down",
	left: "go left",
	isCenter: true,
});
```

#### literal Types

```ts
type expnums = -1 | 0 | 1;

function exp(nOne: number, nTwo: number): expnums {
	return nOne > nTwo ? 1 : nOne < nTwo ? -1 : 0;
}
// will return only expnums
console.log(exp(1, 1));
```

#### Tuple

```ts
/*
-Tuple-
 "is another type of Array Type"
 "you have to be aware of the length, type and position of each item"
*/

let list: readonly [number, string, boolean] = [1, "Sisttara", true];

// enable destructuring
const [id, name, married] = list;

// readonly used to forbid from the adding or deleting from the list
```

#### Void & Never

```ts
/*
--Void
---- Function That Will Return Nothing
---- Function in JS That will Return A Value Will Show Indefined
---- undefined is Not Void
-- Never
---- Return Type Never Returns
---- The Function Doesn't Have A Normal Completion
---- it Throws an Error or never Finishes Running at all "Infinite Loop"
*/

function foo(): void {
	return;
}

function bar(): never {
	throw new Error("Bar Error");
}
```

#### Enums

```ts
// Enumerations
// string or numbers or two of them
// can refer to other enum
enum Levels {
	begginer = 7,
	intermidiate = 8,
	advanced,
}

enum systems {
	cartesian = "cartesian",
	polair = "polair",
	spherique = "spherique",
}

console.log(Levels.advanced);
```

#### Types assertions

```ts
/*
 Data Types
 - Type Assertions
 --- Sometime Compiler Doesnt Know The Information We Do
 --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// WHAT
/*
-- used to define the type of assertions
primitive value, node element,...
*/

// HOW
// Two Ways to define the type of assertion
let myImg = document.getElementById("my-img") as HTMLImageElement;
// OR
let myImg = <HTMLImageElement>document.getElementById("my-img");
///

// WHY
/*
if the assertion doesn't have the property; will throw an error
*/

// EXAMPLE
let myImg = document.getElementById("my-img") as HTMLImageElement;

log(myImg.src); // pass
log(myImg.value); // decline
```

#### type assertion types

```ts
/*
 Data Types
 - Union And Intersection Types
 --- Union Type
 ------ The | Symbol Is Used To Create The Union => "Or"

 --- Intersection Type
 ------ Is A Type That Combines Several Types Into One
 ------ The & Symbol Is Used To Create An Intersection => "And"

 --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// WHAT / WHY

/*
- combine or assign more annotations in one annotation
*/

// HOW

type firstType = {
	// props goes here
	name: string;
};
type secondType = {
	age: number;
};

type intersectionType = firstType & secondType;
type untionType = firstType | secondType;

// EXAMPLE
type personalInfo = {
	name: string;
	age: number;
	isHired: boolean;
};

type additionalInfo = {
	friends: User[];
	skills: string[];
	isMarried: boolean;
};

type uInfo = personalInfo & additionalInfo;

const abSlam: uInfo = {
	name: "abSlam",
	age: 20,
	isHired: false,
	friends: [
		{
			name: "Sisttara",
			age: 20,
			isMarried: true,
			skills: ["swimming", "football", "fighting"],
		},
		{
			name: "Sisttara",
			age: 20,
			isMarried: true,
			skills: ["swimming", "football", "fighting"],
		},
	],
	skills: ["swimming", "eating", "football"],
	isMarried: true,
};
```

#### Interfaces

```ts
// WHAT / WHY

/*
- used to define the object or Classes
- more flexible than types
- can contain functions
- reOpend // we can reOpen the interface and assign to it
*/

// HOW

interface User {
	// props goes here
	readonly name: string; // readonly => identify that the name will not be changed
	// using functions
	sayHello(): string;
	// or
	sayHello: () => string;
	// with params
	getDoubler(num: number): number;
}

// EXAMPLE

interface User {
	name: string;
	age?: number;
	sayHello(): string;
}

const abSlam: User = {
	name: "abSlam",
	age: 30,
	sayHello() {
		return "Hello from abSlam";
	},
};
```

##### extend interface

```ts
// WHAT & WHY
/*
- used to acheive DRY Concept
*/

// HOW

interface newInterface extends oldInterface {
	// props goes here
}

// EXAMPLE
interface User {
	id?: number;
	name: string;
	age: number;
}

interface Admin extends User {
	isAdmin: boolean;
}
```

#### classes

```ts
/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class User {
	constructor(
		private userName: string,
		protected email: string,
		public readonly number: number
	) {}
	sayHello() {
		return `Hello ${this.userName}`;
	}
}

const userOne = new User("Sisttara", "sisttara@gmail.com", 99);
console.log(userOne.number);
```

#### get & set properties

```ts
// WHAT & WHY

/*
- are used to show or update the value of the property
*/

// HOW

class ClassName {
	constructor(private _propOne: string) {}
	get propOne() {
		return this._propOne;
	}
	set propOne(val: string) {
		this._propOne = val;
	}
}

// set
classN.propOne = "NewPropOne";
// get
log(classN.propOne);

// EXAMPLE
class User {
	constructor(
		private _userName: string,
		protected email: string,
		public readonly number: number
	) {}
	sayHello() {
		return `Hello ${this.userName}`;
	}
	get userName() {
		return this.userName;
	}
	set userName(val: string) {
		this.userName = val;
	}
}
const userOne = new User("Sisttara", "sisttara@gmail.com", 99);
console.log(userOne.userName);
userTwo.userName = "new Name";
console.log(userOne.userName);
```

#### Class implements iterface

```ts
// WHAT & WHy

/*
- used to inherit types from the iterface
*/

// HOW

class ClassName implements InterfaceName {
	constructor(...interface) {}
}

// EXAMPLE

interface PersonalInfo {
	name: string;
	phoneNumber: number | string;
}
class User implements PersonalInfo {
	constructor(
		public name: string,
		public readonly phoneNumber: number | string,
	) {
	}
	sayHey(): void {
		console.log("Hey");
	}
}

const userOne = new User("Sisttara", +212631220109);
```

#### Abstarct class

```ts
// WHAT &  WHY

/*
- is the Parent class that provides the methods and properties.
- used to organize the classes
*/

// HOW

// By inserting the "abstract" keyword before the class

abstract class ClassName {
  constructor(public name: string) { }
  abstract methodName(): void;
}

// EXAMPLE

abstract class User {
  constructor(public name: string) { }
  abstract sayHi(): void;
}

class childUser extends User {
  constructor(public name: string) { 
    super(name)
  }
  sayHi(): void {
    console.log("Hi!");
  }
}

// NOTES

/*
- we can also abstract methods inside it.
*/
```
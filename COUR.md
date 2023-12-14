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
// that's allo us to go back to the dinamic declaration
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

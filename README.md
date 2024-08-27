<h1 align="center" style="color: rgb(255, 230, 0); font-weight: bold;">Preview On 'YOU DON'T KNOW JS'</h1>

<div align="center">
<img src="./images/ydkjs.png" alt="">

## Content

<ol style="margin-left: 10%; margin-right: 10%;">
    <li type="1">Into Basic Javascript Programming</li>
    <li>Types and Grammar</li>
    <li>Scopes & Closure</li>
    <li>this & Object Prototypes</li>
</ol>
</div>

<h1 align="center">Into Basic Javascript Programming</h1>

## Basic Syntax:

```bash
var a = 5;
var b ="6";
var c = "Durjoy";
var sum;
sum = a + b ; //output 56
var multiply = a * b; // output 30
sum = a + c; // "5Durjoy"
multiply = a * c; // error
```

The behavior of variable in JS isn't same as other languages like: C, C++ etc.
Here variable is automatically converted to number type. But variable c is a
string which is not possible to convert into number type.So it wasn't converted.
Instead a(number) is converted as string. In JS, fixed value is also known as literals.

## Operator:

The usage of operators are quite same in javascript like all other language.
But there are some key differences in comparison Operator. There is equal `==`
which returns `true` if the operands are equal and not equal `!=` returns
true when operands are not equal by value. It doesn't check the data type.

```bash
console.log(5=="5"); //true

console.log(5!='5'); //false
```

Here implicit coercion is happened. ,<br>
To check the data equality and type, there is another operand which is three equal `===`.
When we use `===`,it checks both the operands value and type. If both of the operands value and type are same
it returns true, else false.

```bash
console.log(5===5); //true
console.log(5==='5'); // false
```

While `!==` works in opposite way of `===`.

```bash
console.log(5!=="5"); //true

console.log(5!==5); //false
```

## Loop:

In Javascript we use three conventional & most used loop(For, while, do while). But there is another two version of 'for' loop which are for-in and for-of.
<br>
For-in: This loop is used for traversing the properties of an object.

```bash
const person = {
    fname:"John",
    lname:"Doe",
    age:25};
for (let x in person) {
  console.log(person[x]);
}
```

For-of: This loop is used to iterate over any iterable variable.

```bash
var age = [12, 33, 45, 23];
for (let x of age) {
  console.log(x);
}
```

forEach: It is used to iterate over all element of an array and execute a function on a single element.

```bash
const a = [1, 2, 3, 4, 5];
a.forEach(myfunction());
function myfunction(number, index) {
  console.log(`Index ${index}: ${number}`);
}

```

callback function can be used in here as well.

```bash
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Index ${index}: ${number}`);
});

const multiplier = 2;
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number * this); // this refers to multiplier
}, multiplier);
numbers.forEach(function(number) {
  console.log(number * this); // this refers to multiplier
}); //result will be undefined
```

thisargs can be used. if this isn't defined it will refer to the global object.
In strict mode which is undefined.

## Function:

In JavaScript, functions are first-class objects, because they can be
passed to other functions, returned from functions, and assigned to variables and
properties. They can also have properties and methods just like any other object.
What distinguishes them from other objects is that functions can be called.

<br> There are varieties of uses of function. They
have regular expression which looks like other languages. Also there are some special
type of functions like `IIFE`, `anynomous`, `callback` etc. Normally function start
with `function` keyword. It doesn't have any return type.<br>
Regular Expression:

```bash
function sum(int a, int b){
    return a+b;
}
```

JavaScript parameter Passing: <br>
JavaScript uses pass-by-value for primitive types and pass-by-reference
for objects (including arrays and functions).

```bash
function modifyValue(x) {
    x = 10;  // This does not change the original value outside the function
}

let num = 5;
modifyValue(num);
console.log(num);  // Output: 5

```

Arguments are always passed by value and never passed by reference. This means
that if a function reassigns a parameter, the value won't change outside
the function. More precisely, object arguments are passed by sharing, which
means if the object's properties are mutated, the change will impact the
outside of the function.

```bash
function updateBrand(obj) {
    obj.brand = "Toyota";  // Mutating the object

    obj = null; // Trying to reassign the parameter
  }

  const car = {
    brand: "Honda",
    model: "Accord",
    year: 1998,
  };
  console.log(car.brand); // Honda

  updateBrand(car); // Pass object reference to the function

  console.log(car.brand); // Toyota
```

Here `this` refers to the object not to the function itself.

### IIFE (Immediately Invoked Function Expression): <br>

It's a design pattern of a function which allows to execute it just after
creation. we can't use it somewhere else unless something is returned.

```bash
var MyModule = (function() {
    var privateVariable = 'I am private';

    function privateFunction() {
        console.log('This is a private function');
    }

    return {
        publicMethod: function() { // key value syntax
            console.log('This is a public method 1');
            privateFunction();
        },
        publicMethod1(){ //shorthand syntax
            console.log('This is a public method');
        }
    };
})();
MyModule.publicMethod1();

MyModule.publicMethod();  // Output: 'This is a public method' and 'This is a private function'
console.log(MyModule.privateVariable);  // Output: undefined (privateVariable is not accessible)
```

To define a method inside an object literal returned from an IIFE, use:

1. Key-Value Syntax: key: function() { ... }
2. Method Shorthand Syntax: key() { ... }

### Anonymous Function:

There is another way to declare a function using variable without directly
providing a function name. As there is no direct function name, it is called as
anonymous function.

```bash
const x = function (a, b) {
    return a * b
};
console.log(x(2,3)); //6
```

### Arrow Function:

It is introduced in ES6 which provides more concise syntactical way to
write a function than traditional way. this is useful for `forEach` loop.

```bash
const greet = () => console.log('Hello, World!');
greet();  // Output: Hello, World!
```

```bash
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});
```

### Callback Function:

A callback function is a function passed into another function as an
argument, which is then invoked inside the outer function to complete
some kind of routine or action.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

function greet(name, callback) {
  //function
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);
```

### Uses of this keywords in Function:

#### this for regular Function:

1. Function call context:
   When a regular function is called as a standalone function (i.e., not as a method of
   an object), this refers to the global object (in non-strict mode) or undefined (in
   strict mode).

```bash
function regularFunction() {
    console.log(this);
}

regularFunction(); // In non-strict mode: `this` refers to the global object (e.g., `window` in browsers)
// In strict mode: `this` is `undefined`

```

2. `this` in methods:
   When a regular function is used as a method, this refers to the object that contains
   the method.

```bash
const obj = {
    name: 'Alice',
    greet: function() {
        console.log(this.name);  // 'this' refers to 'obj'
    }
};

obj.greet();  // Output: 'Alice'
```

<h1 align="center">Scopes and Closure</h1>
Scopes and Closure are fundamental concepts in JavaScript that are crucial for understanding how 
code execution works and how variables are managed.

### Scopes:

Scope refers to the context in which variables and functions are accessible.
It determines which parts of the code can access certain variables and
functions. There are mainly 2 types of scope in javascript. Those are:

1. Global Scope
2. Local Scope

#### 1. Global Scope:

If any declared variables or function from a codebase is accessible from anywhere
in code, that variables and functions is in global scope.

```bash
var globalVar = 'I am global';

function showGlobal() {
    console.log(globalVar); // 'I am global'
}

showGlobal();
console.log(globalVar);
```

#### 2. Local Scope:

If a variable or function is declared in a function or block, is known as
Local scoped variable or function.

```bash
function localScopeExample() {
    var localVar = 'I am local';
    console.log(localVar); // 'I am local'
}

localScopeExample();
console.log(localVar); // ReferenceError: localVar is not defined
```

There are another two scopes based on type of variables characteristics.
Those are:

1. Block Scope
2. Function scope

#### Block Scope: `let` and `const` are block scoped variable.

Those 2 type of variables are only accessible inside the block or the child block,
not outside of the block where it was declared.

```bash
function myfunc(a){
    int i = 0;
    while(i<5){
        a+=i;
        i++;
    }
    return a;
}
let sum = myfunc(0);
console.log(sum); //10
console.log(i); //ReferenceError

if (true) {
    let blockVar = 'I am block-scoped';
    console.log(blockVar); // 'I am block-scoped'
}

console.log(blockVar); // ReferenceError: blockVar is not defined

```

#### Function Scope:

`var` is a function scoped variable. If we declare `var` type variable anywhere
in function, it is accessible anywhere inside of that function.

```bash
function func() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable as above
        console.log(x); // 2
    }
    console.log(x); // 2
}

func();
```

For nested function:

```bash
function outerFunc() {
    var outerVar = 'I am outer';

    function innerFunc() {
        var innerVar = 'I am inner';
        console.log(outerVar); // Accesses the outer function's variable
        console.log(innerVar); // Accesses the inner function's variable
    }

    innerFunc();
    console.log(outerVar); // Accessible here
    console.log(innerVar); // Error: innerVar is not defined (out of scope)
}

outerFunc();
```

### Closure:

<h1 align="center">'this' & Object Prototypes</h1>

#### 1. The `this` Keyword: <br>

The `this` keyword in JavaScript refers to the context in which a function
is executed. Its value can vary depending on how a function is called.

#### a. Global Context: <br>

When this is used in the global execution context (i.e., outside of any
function), it refers to the global object. In a browser, this is the
window object.

```bash
console.log(this); // In a browser, this logs the global object: window
```

#### b. Function Context: <br>

Inside a regular function, the value of `this` depends
on how the function is called.

##### (i) Global Function Call: <br>

If a function is called directly (not as a method or constructor), `this`
refers to the global object (in strict mode, this is undefined).

```bash
function globalFunction() {
    console.log(this); // In non-strict mode, this is the global object; in strict mode, it's undefined
  }
  globalFunction();
```

##### (ii) Method Call: <br>

When a function is called as a method of an object, `this` refers to the
object that owns the method.

```bash
const obj = {
    name: 'Alice',
    greet: function() {
      console.log(this.name); // Logs 'Alice', because `this` refers to obj
    }
  };
  obj.greet();
```

##### (iii) Constructor Function: <br>

When a function is used as a constructor (called with the `new` keyword),
`this` refers to the newly created instance.

```bash
function Person(name) {
    this.name = name;
  }
  const person = new Person('Bob');
  console.log(person.name); // Logs 'Bob', `this` refers to the new Person instance
```

##### (iv) Arrow Function: <br>

Arrow functions do not have their own `this`. Instead, they inherit `this`
from their enclosing lexical context.

```bash
const obj = {
   name: 'Charlie',
   greet: function() {
     setTimeout(() => {
       console.log(this.name); // Logs 'Charlie', because arrow function inherits `this` from greet method
     }, 1000);
   }
 };
 obj.greet();
```

#### 2. Object Prototypes: <br>

JavaScript uses prototypes for inheritance. All objects have an internal
prototype property that points to another object, from which they inherit
properties and methods.

##### a. Prototype Chain: <br>

All objects is Javascript has a prototype which itself is an object.
This prototype object can have it's own prototype by containing a prototype
chain. By using `object.prototype`, top of the can be accessible.

```bash
const parent = {
    sayHello() {
      console.log('Hello');
    }
  };

  const child = Object.create(parent);
  child.sayHello(); // Logs 'Hello', `child` inherits from `parent`
```

Here `Object.create()` method creates a new prototype of specified object
prototype.

##### b. Constructor Functions and Prototypes: <br>

Constructor functions use the prototype property to define methods and
properties that should be shared across all instances created by the
constructor.

```bash
function Animal(name) {
    this.name = name;
  }

  Animal.prototype.sayName = function() {
    console.log(this.name);
  };

  const cat = new Animal('Whiskers');
  cat.sayName(); // Logs 'Whiskers'
```

<h1 align="center">Types & Grammar</h1>
JavaScript has a dynamic type system, meaning types are determined at 
runtime. <br>

#### 1. Primitive Types in JavaScript:

##### a. Undefined:

Represents a variable that has been declared but not yet assigned a value.

```bash
let x;
console.log(x); // 'undefined'
```

For hoisting reason, a value can be undefined as well.

##### b. Null:

A special value that represents "no value" or "nothing".
It is explicitly assigned to variables.

```bash
let x = null;
console.log(x); // 'null'
```

##### c. Boolean:

Represents a logical entity with two values: `true` and `false`.

```bash
let flag = true;
console.log(flag); // true

console.log(3===3); //true
```

##### d. Number & String:

`Integer` and `double` both are Numbers. `string` is a series of characters.

```bash
let n = 30;
let f = 30.5;
let s = "It's raining";
console.log(n, f); //30, 30.5
console.log(s);// It's raining

console.log(typeof(n)); //number
console.log(typeof(f)); //number
console.log(typeof(s)); //string
```

##### e. Symbol & BigInt:

Symbol is unique and immutable data type used primarily as object
property keys. And `bigInt` is an arbitrary-precision integer type.
Introduced to handle very large numbers.

```bash
const sym = Symbol('description');
console.log(sym); // Logs 'Symbol(description)'
console.log(typeof(sym)); //Symbol

let bint = 983208374297902724n;
console.log(bint); // 983208374297902724n
console.log(typeof(bint)); //bigint
```

##### f. Object:

A collection of key-value pairs. Objects are complex data types that
can store multiple values.

```bash
const person ={
    name: 'Daniel',
    contact: '*********',
    address: 'House: 4, street: 3, NY, USA'
}
console.log(person); // output whole object
console.log(typeof(person)); // object
```

#### 2. Type Conversion:

There are 2 types of type conversion in javascript. implicit and explicit.

##### a. Implicit Conversion(coercion):

JavaScript automatically converts types in certain operations.

```bash
console.log('5' + 1); // '51' (string concatenation)
console.log('5' - 1); // 4 (numeric subtraction)
```

##### b. Explicit Conversion:

Manual conversion of types using global functions like `String()`,
`Number()`, and `Boolean()`.

```bash
let numStr = "123";
let num = Number(numStr);
console.log(num); // 123
console.log(typeof(num)); // number
```

#### 3. Grammar & Syntax:

This part was already mentioned in <span style="font-weight: bold;">"Basic Javascript" </span> portion.

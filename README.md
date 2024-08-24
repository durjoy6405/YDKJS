<h1 align="center" style="color: rgb(255, 230, 0); font-weight: bold;">Preview On 'YOU DON'T KNOW JS'</h1>

<div align="center">
<img src="./images/ydkjs.png" alt="">

## Content

<ol style="margin-left: 10%; margin-right: 10%;">
    <li type="1">Into Basic Javascript Programming</li>
    <li>Types and Grammar</li>
    <li>Scopes & Closure</li>
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

thisargs can be used. if this isn't defined it will refer to the global object. In strict mode which is undefined.

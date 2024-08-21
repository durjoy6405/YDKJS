//let age = prompt("Tell me your age: ");
let age = 11;
console.log(age);

//coercion
var a = "42";
var b = Number(a);
console.log(a); // "42"
console.log(typeof a);
console.log(b);

//Dynamic typing
var amount = 99.99;
amount = amount * 2;
console.log(amount); // 199.98
// convert `amount` to a string, and
// add "$" on the beginning
amount = "$" + String(amount);
console.log(amount);
//Array
let arr = ["Durjoy", 23, true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

var aa = 3.14159;
var s = "ghsdfkjl";
console.log(aa.toFixed(4));
console.log(s.length);
console.log(s.toUpperCase());

//prototype
var foo = {
  a: 42,
};
// create `bar` and link it to `foo`
var bar = Object.create(foo);
var baz = Object.create(bar);
bar.b = "hello world";
baz.c = "address";
bar.b; // "hello world"
bar.a;
console.log(baz.a);
console.log(baz.b);
console.log(baz.c);

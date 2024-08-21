var a = 2;
obj = {
  a: 6,
  b: 24,
};
(function (def) {
  def(obj);
})(function def(global) {
  var a = 3;
  console.log(a); // 3
  console.log(global.a); // 2
});

var x = 2;
function foo() {
  console.log(this.x);
}
//var x = 2;
foo();

let name = {
  fname: "dur",
  lname: "joy",
  printfullName: function () {
    console.log(this.fname + " " + this.lname);
  },
};
name.printfullName();

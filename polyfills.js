const arr = [1, 2, 3, 4, 5];

Array.prototype.forEach = null;
if (!Array.prototype.forEach) {
  //polyfill
  Array.prototype.forEach = function (callbackFunction) {
    for (let val of this) {
      callbackFunction(val);
    }
  };
}
arr.forEach((value) => {
  console.log(value * 2);
});

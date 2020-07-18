/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = Math.pow(2, 31);

  const newX = Math.abs(x).toString().split("").reverse().join("");

  const k = x > 0 ? 1 : -1;

  return newX > limit ? 0 : newX * k;
};

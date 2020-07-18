/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const filter = ["V", "X", "L", "C", "D", "M"];
  let sum = 0;

  const sReverse = s.split("").reverse();

  for (let i in sReverse) {
    let residuo = 0;
    switch (sReverse[i]) {
      case "I":
      case "X":
      case "C":
        if (filter.indexOf(sReverse[i + 1]) >= 0) {
          residuo = romans[sReverse[i]];
          break;
        }
        sum += romans[sReverse[i]];
        break;
      default:
        sum += romans[sReverse[i]] - residuo;
        residuo = 0;
        return;
    }
  }

  return sum;
};

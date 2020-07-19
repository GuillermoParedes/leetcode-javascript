/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const signes = new Map();
  signes.set("(", ")");
  signes.set("[", "]");
  signes.set("{", "}");
  if (s.length % 2 === 0) {
    let aux = s;
    let flag = true;
    let end = s.length - 1;
    let start = 0;
    let limit = s.length / 2;

    while (limit >= start && limit <= end) {
      if (signes.get(aux.charAt(start)) !== aux.charAt(end)) {
        // if (signes.get(aux.charAt(start) !== aux.charAt(start + 1))) {
        flag = false;
        // }
      }
      start++;
      end--;
    }
    return flag;
  } else {
    return false;
  }
};

console.log('"()"::::>', isValid("()"));
console.log("================EXPECTED: TRUE=======================");
console.log('"()[]{}"::::>', isValid("()[]{}"));
console.log("================EXPECTED: TRUE=======================");
console.log('"(]"::::>', isValid("(]"));
console.log("================EXPECTED: TRUE=======================");
console.log('"([)]"::::>', isValid("([)]"));
console.log("================EXPECTED: TRUE=======================");
console.log('"{[]}"::::>', isValid("{[]}"));

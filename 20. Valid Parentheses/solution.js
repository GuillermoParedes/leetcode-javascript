/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log("type", typeof s);
  const signesMap = new Map();
  signesMap.set("(", ")");
  signesMap.set("{", "}");
  signesMap.set("[", "]");

  const stack = [];

  for (const paran of s) {
    if (signesMap.get(paran)) {
      stack.push(paran);
    } else {
      const closeParan = stack.pop();
      if (paran !== signesMap.get(closeParan)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// console.log('"()"::::>', isValid("()"));

// console.log('"(][){}"::::>', isValid("(][){}"));

// console.log('"(]"::::>', isValid("(]"));

// console.log('"([)]"::::>', isValid("([)]"));

console.log('"{[]}"::::>', isValid("{[]}"));
console.log('"[{())}]"::::>', isValid("[{())}]"));

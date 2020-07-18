/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length > 0) {
    let [prefix] = strs.sort((a, b) => a.length - b.length).reverse();

    let count = 0;
    while (count !== strs.length) {
      for (let i = 0; i < strs.length; i++) {
        const strsIndex = strs[i];

        if (strsIndex.startsWith(prefix)) {
          count++;
        } else {
          count = 0;
          prefix = prefix.slice(0, prefix.length - 1);
          break;
        }
      }
    }

    return prefix;
  } else {
    return "";
  }
};

console.log(
  '["flower","flow", "flight], the prefix is::',
  longestCommonPrefix(["flower", "flow", "flight"])
);

console.log(
  '["dog", "racecar", "car"], the prefix is::',
  longestCommonPrefix(["dog", "racecar", "car"])
);

console.log(
  '["c", "acc", "ccc"], the prefix is::',
  longestCommonPrefix(["c", "acc", "ccc"])
);

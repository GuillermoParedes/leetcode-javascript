/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  for (let i in nums) {
    const completion = target - nums[i];
    const getN = numsMap.get(completion);
    if (getN && getN !== i) {
      return [i, getN];
    } else {
      numsMap.set(nums[i], i);
    }
  }
};

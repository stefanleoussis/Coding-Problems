/**
 * @param {number[]} nums
 * @return {number}
 *
 * June 7th 2022
 */

var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == 0) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] = 0;
    }
  }
  for (let j in map) {
    if (map[j] == 0) {
      return j;
    }
  }
};

console.log(singleNumber([2, 1, 0, 0, 1, 2]));

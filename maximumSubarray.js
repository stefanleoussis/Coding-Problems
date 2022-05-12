/**
 * @param {number[]} nums
 * @return {number}
 *
 * Easy - May 10th 2022
 */
const maxSubArray = function (nums) {
  if (!nums.length) {
    return;
  }

  let maxSoFar = nums[0];
  let maxEndingHere = 0;
  for (let i = 0; i < nums.length; i++) {
    maxEndingHere = maxEndingHere + nums[i];
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) maxEndingHere = 0;
  }

  return maxSoFar;
};

console.log(maxSubArray([-4, 6, -4, 5]));

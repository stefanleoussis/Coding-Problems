/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let rodArr = [];
  for (let i = 0; i < 10; i++) {
    rodArr[i] = "RGB";
  }

  for (let j = 0; j < rings.length; j += 2) {
    rodArr[rings[j + 1]] = rodArr[rings[j + 1]].replace(rings[j], "");
  }

  let numOfSets = 0;
  for (let k = 0; k < rodArr.length; k++) {
    if (!rodArr[k]) {
      numOfSets += 1;
    }
  }
  return numOfSets;
};

console.log(countPoints("B0B6G0R6R0R6G9"));

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let first = preferences[i] - 1;
    let second = preferences[first] - 1;
    let third = preferences[second] - 1;
    if (i === third) {
      count++;
    }
  }
  return Math.floor(count) / 3;
};


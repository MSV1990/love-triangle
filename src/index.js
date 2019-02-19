/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 let arr = [];
  preferences.unshift(0);
  for (let i = 1; i < preferences.length; i++) {
   
    let first = i;
    let second = preferences[preferences[i]] ;
    let third = preferences[second];
    if (first === third && second !== third) {
 
      arr.push(first);
    }
  }
  return arr.length / 3;
};

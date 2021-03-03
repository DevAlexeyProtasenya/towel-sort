
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (typeof matrix !== 'undefined') {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        matrix[i].forEach(element => {
          result.push(element);
        });
      } else {
        matrix[i].reverse().forEach(element => {
          result.push(element);
        });
      }
    }
  }
  return result;
}
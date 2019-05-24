'use strict';

function isPal(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      arr.splice(i, 1);
    }
  }
  var string = arr.join('').toLowerCase();
  var strReverse = arr.reverse().join('').toLowerCase();
  // if (string.indexOf(strReverse) !== -1) {
  if (string === strReverse) {
    return true;
  }
  return false;
}

module.exports = isPal;

'use strict';

function anClean(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var sort = arr[i].toLowerCase().split('').sort().join('');
    obj[sort] = arr[i];
  }

  var result = [];

  for (var key in obj) {
    result.push(obj[key]);
  }
  return result;
}

module.exports = anClean;

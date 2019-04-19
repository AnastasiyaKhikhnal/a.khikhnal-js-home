'use strict';
var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

function multiplyNumeric(object) {
  for (var key in object) {
    if (isFinite(object[key]) && !isNaN(parseFloat(object[key]))) {
      object[key] *= 2;
    }
  }
  return object;
}

multiplyNumeric(image);
module.exports = multiplyNumeric;

'use strict';
var competitionRating = {
  'Vasya': 20,
  'Misha': 18,
  'Dasha': 28,
  'Grisha': 25
};

function getMaxValue(obj) {
  var max = 0;
  for (var key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      var winner = key + ':' + max;
    }
  }
  return winner;
}

getMaxValue(competitionRating);
module.exports = getMaxValue;

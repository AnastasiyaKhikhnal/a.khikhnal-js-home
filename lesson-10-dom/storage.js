'use strict';
function THashStorage() {
  var storage = {};

  this.addValue = function (key, value) {
    storage[key] = value;
  };

  this.getValue = function (key) {
    if (key in storage) {
      return storage[key];
    } return 'Такого напитка нет в базе данных';
  };

  this.deleteValue = function (key) {
    if (key in storage) {
      delete storage[key];
      return true;
    } return false;
  };

  this.getKeys = function () {
    return Object.keys(storage);
  };
}

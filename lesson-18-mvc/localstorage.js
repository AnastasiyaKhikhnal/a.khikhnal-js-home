'use strict';

function TLocalStorage(type) {
  var self = this;
  var storage = {};
  var localStorage = window.localStorage;
  self.type = type;

  self.reset = function () {
    if (localStorage[self.type]) {
      storage = JSON.parse(localStorage[self.type]);
    }
  };

  self.addValue = function (key, value) {
    storage[key] = value;
    localStorage.setItem(self.type, JSON.stringify(storage));
  };

  self.getKeys = function () {
    return Object.keys(storage);
  };

  self.getValue = function (key) {
    return storage[key];
  };

  self.deleteValue = function (key) {
    delete storage[key];
    localStorage.setItem(self.type, JSON.stringify(storage));
  };
}

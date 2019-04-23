var multiplyNumeric = require('./task2.js');

describe('Сheck the multiplication of numeric values by 2', function multiplication() {
  it('Check multiply numbers by 2', function multiply() {
    var image = {
      width: 100,
      height: 400
    };
    var result = multiplyNumeric(image);
    expect(result).toEqual({
      width: 200,
      height: 800
    });
  });
  it('Check multiply if object contain string', function f() {
    var image = {
      width: 100,
      height: 400,
      title: 'Cool image'
    };
    var result = multiplyNumeric(image);
    expect(result).toEqual({
      width: 200,
      height: 800,
      title: 'Cool image'
    });
  });
  it('Negative test: check multiply if the object is null', function f() {
    var image = {
      width: 100,
      height: null,
      title: 'Cool image'
    };
    var result = multiplyNumeric(image);
    expect(result).not.toEqual({
      width: 200,
      height: 800,
      title: 'Cool image'
    });
  });
});

var getMaxValue = require('./task1');

describe('Maximum value', function isMaxValues() {
  it('To find the maximum value of the numeric values', function f() {
    var obj = {
      'Vasya': 20,
      'Misha': 18,
      'Dasha': 28,
      'Grisha': 25
    };
    var result = getMaxValue(obj);
    expect(result).toBe('Dasha:28');
  });
  it('Negative test: to find the maximum value if object contain null', function f() {
    var obj = {
      'Vasya': 20,
      'Misha': 18,
      'Dasha': null,
      'Grisha': 25
    };
    var result = getMaxValue(obj);
    expect(result).toBe('Grisha:25');
  });
  it('Negative test: to find the maximum value if value of object is string', function f() {
    var obj = {
      'Vasya': 20,
      'Misha': 18,
      'Dasha': '28',
      'Grisha': 90
    };
    var result = getMaxValue(obj);
    expect(result).toBe('Grisha:90');
  });
});

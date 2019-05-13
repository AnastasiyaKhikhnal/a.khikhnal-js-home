var isPal = require('./task2');
describe('check if the argument passed is palindrome', function checkPalindrom() {
  it('check if string is palindrome', function f() {
    var string = 'Нажал кабан на баклажан';
    var result = isPal(string);
    expect(result).toBe(true);
  });
  it('check if string is palindrome', function f() {
    var string = 'А роза упала на лапу Азора';
    var result = isPal(string);
    expect(result).toBe(true);
  });
  it('check if string is palindrome', function f() {
    var string = '12321';
    var result = isPal(string);
    expect(result).toBe(true);
  });
  it('check if string is palindrome', function f() {
    var string = 'AnNa';
    var result = isPal(string);
    expect(result).toBe(true);
  });
  it('check if string is palindrome', function f() {
    var string = 'Вася';
    var result = isPal(string);
    expect(result).toBe(false);
  });
  it('check if string is palindrome', function f() {
    var string = '123212';
    var result = isPal(string);
    expect(result).toBe(false);
  });
});

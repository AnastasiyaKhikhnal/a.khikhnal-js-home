var anClean = require('./task3');
describe('check anagram for exception from passed argument', function checkAnagram() {
  it('check anagram for exception from passed argument', function f() {
    var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    var result = anClean(arr);
    expect(result).toEqual(['ЗОВ', 'гробик', 'сектор']);
  });
});

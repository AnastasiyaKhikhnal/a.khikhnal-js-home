describe('check methods return by index', function checkStringIndex() {
  it('check returns simbol in string by index', function checkByIndex() {
    var text = 'hello';
    expect(text[4]).toBe('o');
  });
  it('negativ check return simbol in string by index', function checkByIndexNegative() {
    var text = 'hello';
    expect(text[3]).not.toBe('o');
  });
});

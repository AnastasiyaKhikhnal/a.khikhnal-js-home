describe('check methods charAt', function checkStringCharat() {
  it('check returns simbol in string', function checkCharAtPositive() {
    var text = 'hello';
    expect(text.charAt(2)).toBe('l');
  });
  it('check returns simbol in string (negative)', function checkCharAtNegative() {
    var text = 'hello';
    expect(text.charAt(2)).not.toEqual('o');
  });
});

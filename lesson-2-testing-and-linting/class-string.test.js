describe('check class string', function checkString() {
  it('check length by array', function lengthArray() {
    expect([1, 2, 3]).toHaveLength(3);
  });
  it('check length by string', function checkLengthString() {
    expect('example').toHaveLength(7);
  });
  it('check length by empty string', function checkLengthStringEmpty() {
    expect('').not.toHaveLength(7);
  });
});

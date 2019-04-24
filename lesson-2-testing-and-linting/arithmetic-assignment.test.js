describe('check arithmetic assignment', function checkArithmeticAssignment() {
  it('check division assignment', function checkDivisionAssignment() {
    var a = 8;
    expect(a /= 2).toBe(4);
  });
  it('check multiplication assignment', function checkMultiAssignment() {
    var a = 5;
    expect(a *= 2).toBe(10);
  });
  it('check addition assignment', function checkAdditionAssignment() {
    var a = 8;
    expect(a += 2).toBe(10);
  });
  it('check assignment subtraction', function checkSubtractionAssignment() {
    var a = 5;
    expect(a -= 2).toBe(3);
  });
});

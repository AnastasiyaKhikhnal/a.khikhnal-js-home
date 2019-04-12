describe('check the arithmetic operation of dividing two numbers', function checkDivision() {
  it('check division of integers', function checkSum() {
    expect(8 / 2).toBeCloseTo(4);
  });
  it('check floating division', function checkSum() {
    expect(0.8 / 0.3).toBeCloseTo(2.667, 3);
  });
});

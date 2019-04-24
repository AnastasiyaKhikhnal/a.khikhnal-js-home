describe('check arithmetic addition operation', function checkAddition() {
  it('check addition of integers', function checkSum() {
    expect(2 + 2).toBe(4);
  });
  it('check floating addition', function checkSum() {
    expect(0.2 + 0.2).toBeCloseTo(0.4);
  });
});

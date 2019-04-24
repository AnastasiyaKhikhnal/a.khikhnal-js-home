describe('check decrement increment', function checkDecrementIncrement() {
  it('check division assignment', function checkPreDecrement() {
    var a = 8;
    expect(--a).toBe(7);
  });
  it('check multiplication assignment', function checkPreIncrement() {
    var a = 8;
    expect(++a).toBe(9);
  });
  it('check addition assignment', function checkPostDecrement() {
    var a = 5;
    expect(a--).toBe(5);
    expect(a).toBe(4);
  });
  it('check assignment subtraction', function checkPostIncrement() {
    var a = 5;
    expect(a++).toBe(5);
    expect(a).toBe(6);
  });
});

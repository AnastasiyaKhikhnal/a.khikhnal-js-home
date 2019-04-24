describe('check logical &&', function checkLogicOperations() {
  it('check logical &&', function checkLogPositive() {
    var name = 'Alex';
    var age = 25;
    expect(name === 'Alex' && age < 50).toBeTruthy();
  });
  it('(negative) check logical && ', function checkLogNegative() {
    var name = 'Alex';
    var age = 25;
    expect(name === 'Alex' && age > 50).not.toBeTruthy();
  });
});

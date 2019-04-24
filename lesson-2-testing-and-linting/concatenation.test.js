describe('check string operations', function checkStringtOperations() {
  test('check concatenation', function checkConcatenation() {
    expect('Hello ' + 'world').toBe('Hello world');
  });
  test('check concatenation assignment', function checkConcatAssignment() {
    var a = 'Hello';
    expect(a += ' world').toBe('Hello world');
  });
});

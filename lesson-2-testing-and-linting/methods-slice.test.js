describe('check methods slice', function methodsSlice() {
  it('check method slice', function checkSlice() {
    var text = 'hello';
    expect(text.slice(2)).toEqual('llo');
  });
  it('(negative) check slice', function checkSlice() {
    var text = 'hello';
    expect(text.slice(1)).not.toEqual('llo');
  });
});

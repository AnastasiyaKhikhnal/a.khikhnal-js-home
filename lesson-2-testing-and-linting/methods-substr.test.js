describe('check methods substr', function checkStringIndex() {
  it('check for substring return from specified index', function checkReturnsubString() {
    var text = 'hello';
    expect(text.substr(1)).toEqual('ello');
  });
  it('check returns simbol against index indicated length', function checkReturnsubString() {
    var text = 'hello';
    expect(text.substr(1, 3)).toEqual('ell');
  });
  it('(negative)check returns simbol against specified index', function checkReturnsubString() {
    var text = 'hello';
    expect(text.substr(1)).not.toEqual('llo');
  });
  it('(negative) check returns simbol against index indicated length', function checkReturnsubString() {
    var text = 'hello';
    expect(text.substr(1, 3)).not.toEqual('hel');
  });
});

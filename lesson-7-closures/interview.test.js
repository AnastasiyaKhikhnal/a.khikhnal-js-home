var interviewQuestion = require('./interview');

describe('check the correct string', function correctString() {
  it('check the correct string if you pass (the teacher)', function f() {
    var profession = 'teacher';
    var name = 'John';
    var result = interviewQuestion(profession)(name);
    expect(result).toBe('What subject do you teach ' + name + '?');
  });
  it('check the correct string if you pass (the designer)', function f() {
    var profession = 'designer';
    var name = 'Mark';
    var result = interviewQuestion(profession)(name);
    expect(result).toEqual(name + ' can you please explain what UX design is?');
  });
  it('check the correct string if you pass (the economist)', function f() {
    var profession = 'economist';
    var name = 'Alex';
    var result = interviewQuestion(profession)(name);
    expect(result).toEqual('Hello ' + name + ', what do you do?');
  });
  it('check the correct string if you pass null', function f() {
    var profession = null;
    var name = 'Mary';
    var result = interviewQuestion(profession)(name);
    expect(result).toBe('Hello ' + name + ', what do you do?');
  });
});

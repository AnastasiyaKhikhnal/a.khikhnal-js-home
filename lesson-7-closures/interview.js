'use strict';

function interviewQuestion(profession) {
  return function (name) {
    if (profession === 'teacher') {
      return 'What subject do you teach ' + name + '?';
    } else if (profession === 'designer') {
      return name + ' can you please explain what UX design is?';
    }
    return 'Hello ' + name + ', what do you do?';
  };
}

module.exports = interviewQuestion;

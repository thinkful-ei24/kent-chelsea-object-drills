function createMyObject() {
  return { 
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  }
}

// Object updater

function updateObject(obj) {
  
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  
  return obj;
}

// Self-reference

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() { 
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

//Deleting keys

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  
  delete obj.foo;
  delete obj.bar;

  return obj;
}

// Make student reports
function makeStudentsReport(data) {
  return data.map(student => `${student.name}: ${student.grade}`);
}


// Enroll in Summer School

function enrollInSummerSchool(students) {
  students.forEach(student => student.status = 'In Summer school');
  return students;
}

// Find by id

function findById(items, idNum) {
  return items.find(item => item.id === idNum);
}

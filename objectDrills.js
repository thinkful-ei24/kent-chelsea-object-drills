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


//Validate object keys

function validateKeys(object, expectedKeys) {
  if (Object.keys(object).length !== expectedKeys.length) return false;

	for (let i = 0; i < expectedKeys.length; i++) {
		if (!Object.keys(object).includes(expectedKeys[i])) return false;
	}

	return true;
}

// Advanced Object Drills
// Object initializers and methods

const loaf = { 
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
}

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());


//Iterating over an object's properties

let random = {
	foo: 2,
	bar: 4,
	fum: 6, 
	quux: 8,
	spam: 10
}

for (key in random) {
	console.log(`${key} is ${random[key]}`);
}

//
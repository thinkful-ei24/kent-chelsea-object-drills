'use strict';

function createMyObject() {
  return { 
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
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
};

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
};

for (key in random) {
  console.log(`${key} is ${random[key]}`);
}

//Arrays in objects
let hobbit = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);

//Arrays of objects

let people = [
  {
    name: 'Chelsea',
    jobTitle: 'human'
  },
  {
    name: 'Kent',
    jobTitle: 'human'
  },
  {
    name: 'R2D2',
    jobTitle: 'robot'
  },
  {
    name: 'Siri',
    jobTitle: 'AI'
  }
];

people.forEach(person => console.log(`${person.name} is a ${person.jobTitle}`));

// Properties that aren't there

people.forEach(person => {if (person.name !== 'Siri') person.boss = 'Siri';});

people.forEach(person => {
  if (person.boss) {
    console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
  } else {
    console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
  }
});

//Cracking the code

let message = 'craft block argon meter bells brown croon droop';

let cipher = {
  a:	2,
  b:	3,
  c:	4,
  d:	5
};

let decode = (encodedWord) => {
  if(cipher[encodedWord[0]]) {
    return encodedWord[cipher[encodedWord[0]] -1];
  } else {
    return ' ';
  }
  //return correct decoded character
};

console.log(decode('craft'));

let decodeWords = (message) => {
  let messageArr =	message.split(' ');

  return messageArr.reduce((decodedMessage, word) => {
    return decodedMessage += decode(word);
  }, '');
  //return fully decoded message as a string
};
console.log(decodeWords(message));


// Factory Functions with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      console.log(`${this.name} is a ${race} from ${origin}.`);
    },
    evaluateFight: function(character) {
      // Gandalf attacks Frodo
      // character = Frodo
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  }
}

let characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell', 5, 5));

characters.find(name => name.nickname === 'aragorn');
// console.log(characters);
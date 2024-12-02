// 1. Destructuring Assigment
// array
const arr = ['Robby', 'Ilham', 'Kusuma'];

// destructuring
const [name1, name2, name3] = arr;

// print output
console.log(name1);
console.log(name2);
console.log(name3);

// 2. Destructuring Object
// object
const obj = {
    name: 'Robby Ilhamkusuma',
    age: 36,
};

// destructuring
const {name, age} = obj;

// print output
console.log(name);
console.log(age);

// 3. Restructuring Assignment
const name4 = 'Robby Ilhamkusuma';
const age4 = 36;

// restructuring
const obj2 = { name4, age4};

// print output
console.log(obj2);
// define function
const hello = function (name) {
    return `Hello ${name}`;
}

// panggil function
hello('Robby Ilhamkusuma');


// 1. jika dirubah menjadi arrow function
// define funtion
const hello1 = name => `Hello ${name}`;

// panggil function
hello1('Robby Ilhamkusuma');


// 2. jika arrow function memiliki lebih dari 1 parameter
// define function
const hello2 = (name, age) => `Hello ${name}, you are ${age}`;

// panggil function
hello2('Robby Ilhamkusuma', 34);

// 3. Jika memiliki function yang nilai baliknua berupa object
// define function
const hello3 = (name, age) => ({
    status: 'OK',
    message: `Hello $name age ${age}`
});


// 4. Jika function memiliki lebih dari 1 baris kode
// define function
const hello4 = name => {

    if (!name) {
        console.log('Name is required');
    }

    return `Hello ${name}`;
}
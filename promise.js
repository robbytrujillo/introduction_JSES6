// define variable
let done = true;

// define a promise
const task = new Promise((resolve, reject) => {

    if (done) {

        resolve('Task berhasil diselesaikan');
    } else {

        reject('Task belum diselesaikan');
    }
});

// run promise
console.log(task);

// mengambil nilai resolve dan rect secara langsung
// define variable
let done1 = true;

//  define a promise
const task1 = new Promise((resolve, recect) => {
    
    if (done1) {
        resolve('Task berhasil diselesaikan');
    } else {
        reject('Task belum diselesaikan');
    }
});

// run promise with action
task1
        .then(response => console.log(response))
        .catch(response => console.log(response))
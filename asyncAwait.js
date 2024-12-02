// define a promise with 3 seconds
const taskPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('Selesai'), 3000)
    })
}

// define function "task" with async
const task = async () => {
    const done = await taskPromise();
    console.log(done);
}

// print
console.log('Mulai');
task();
console.log('Akhir');
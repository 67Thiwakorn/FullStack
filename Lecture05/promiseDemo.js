function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('Timeout of 2 seconds has completed.');
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log('Timeout of 1 second has completed.');
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(`The final resolved value is: ${result}`);
    })
    .catch(() => {
        console.log('An error occurred during the promise chain.');
    });
    
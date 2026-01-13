function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log('Starting the async function...');
    await promiseTimeout(2000);
    console.log('Timeout of 2 seconds has completed.');
}

run();
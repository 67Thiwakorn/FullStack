const promise = new Promise((resolve, reject) => {
    const res = true;
    if (res) {
        resolve('Promise resolved successfully!');
    } else {
        reject('Promise rejected!');
    }
});

promise.then(
        (res) => console.log(res),
        (err) => console.log(err)
    );
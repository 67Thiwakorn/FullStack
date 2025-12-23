const names = ["Alice", "Bob", "Charlie"];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach((name) => {
    console.log(name);
});

for (const name of names) {
    console.log(name);
}

///--------------arr_loop--------------///

names.forEach(myfunction);

function myfunction(name) {
    console.log(name);
}

///--------------func_arr_loop--------------///


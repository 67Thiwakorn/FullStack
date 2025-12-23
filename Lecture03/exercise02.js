let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

let cValues = values1.filter(value => values2.includes(value) && values3.includes(value));
console.log(cValues);

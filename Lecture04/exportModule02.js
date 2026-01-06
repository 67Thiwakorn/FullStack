const hello = require('./exportModule01');

hello.sayHello();
console.log(hello.person.name);
console.log(hello.cube(3));
console.log(hello.add(5, 7));
console.log(`Status is: ${hello.status}`);  
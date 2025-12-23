const objBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true
};

bookJSON = JSON.stringify(objBook);
console.log(bookJSON);
console.log(typeof bookJSON);

const receivedBookobj = JSON.parse(bookJSON);
console.log(receivedBookobj);
console.log(typeof receivedBookobj);
console.log(receivedBookobj.title);
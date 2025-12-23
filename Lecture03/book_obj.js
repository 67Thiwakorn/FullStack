const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    isAvailable: true,

checkOut: function() {
    this.isAvailable = false;
},

checkIn: function() {
    this.isAvailable = true;
}
};

console.log(typeof book);
console.log(book);
console.log(`Title: ${book.title}`);
console.log("Is Available:", book.isAvailable);
book.checkIn();
console.log("Is Available after checkin:", book.isAvailable);
book.checkOut();
console.log("Is Available after checkout:", book.isAvailable);

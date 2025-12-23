const finalpaticipants = ["Alice", "Bob", "Charlie", "David"];
const announcements = finalpaticipants.map((member) => {
    return member + " Joined the game";
});
console.log(announcements);

///Alternatively, using a named function

const kvArray = [
{ key: 1, value: 10 },
{ key: 2, value: 20 },
{ key: 3, value: 30 }
];

const reformattedArray = kvArray.map(
    ({ key, value }) =>  ({ [key]: value })
);

console.log(reformattedArray);

///Using map to extract specific properties from an array of objects
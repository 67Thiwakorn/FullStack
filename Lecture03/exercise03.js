const guests = ['Alice', 'Bob', 'Charlie', 'David'];
const searchName = 'Charlie';

function findGuest(name, guestList) {
    for (let i = 0; i < guestList.length; i++) {
        if (guestList[i] === name) {
            return `${name} is on the guest list.`;
        }   
    }
    return `${name} is not on the guest list.`;
}
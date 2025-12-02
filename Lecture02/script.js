const name = "World";
const score = 100;

console.log(`Hello, ${name}! Your score is ${score}.`);

//-------------str template Literals----------------------------

const istatus = 200;

if (istatus === 200) {
    console.log("OK");
} else if (istatus === 404) {
    console.log("Not Found");
} else {
    console.log("Unknown Status");
}

//-------------if else----------------------------

switch (istatus) {
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("Unknown Status");
        break
}

//-------------switch----------------------------

const statusMessage = (istatus === 200) ? "OK" :"Bad Request";
console.log(statusMessage);

//-------------Conditional Statements----------------------------

function findParameter(length, width) {
    const parameter = 2 * (length + width);
    return parameter;
}

let result = findParameter(5, 10);
console.log(`Parameter is: ${result}`);

//-------------Function----------------------------
const x = 5;
const y = 10;

const add = function(a, b) {
    return a + b;
};

// Normal Function

const addArrow = (a, b) => {
    return a + b;
};

// Arrow Function

const subtract = (a, b) => {
    const result = a - b;
    return result;
}

console.log(`Add is(arrow): ${addArrow(x, y)}`);
console.log(`Add is: ${add(x, y)}`);
console.log(`Subtract is: ${subtract(y, x)}`);
//-------------Arrow Function----------------------------

const fullName = " John Doe ";
console.log(`Full Name: '${fullName}'`);

const cleanName = fullName.trim();
console.log(`Clean Name: '${cleanName}'`);

const nameParts = cleanName.split(' ');
console.log(`First Name: ${nameParts[0]}`);
console.log(`Last Name: ${nameParts[1]}`);

const finalparts = cleanName.filter(Boolean);
console.log(finalparts);

const firstname = finalparts[0];
console.log(`First Name: ${firstname}`);

const lastname = finalparts[1];
console.log(`Last Name: ${lastname}`);

//-------------String Methods----------------------------

function censorWord(sentence, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const censoredText = sentence.replace(regex, '****');
    return censoredText;
}

const originalSentence = "JavaScript is fun, but sometime javascript.";
const wordToCensor = "JavaScript";
const cleanedSentense = censorWord(originalSentence, wordToCensor);
console.log(cleanedSentense);

//-------------Regular Expression----------------------------

function generateTempId() {
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderId = generateTempId();
console.log(`Generated Order ID: ${orderId}`);

//-------------Generate Temp ID----------------------------

const startTime = Date.now();

function someHeavyTask() {
    for (let i = 0; i < 1e7; i++) {
        Math.sqrt(i);
    }
}

someHeavyTask();

const endTime = Date.now();
const elapsedTime = endTime - startTime;
console.log(`Elapsed time: ${elapsedTime} ms`);

//-------------Performance Measurement----------------------------

const registrationDate = "2023-09-17T10:00:00Z";

const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    timeZone: 'Asia/Bangkok' };

const formattedDate = new Date(registrationDate).toLocaleDateString('th-TH', options);
console.log(`Registration Date: ${formattedDate}`);

//-------------Date and Time Formatting----------------------------

function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toISOString('th-TH');

    const eventID = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [${eventID}] ${logMessage}`;
}

const logEntry = createLogEntry("User logged in Successfully");
console.log(logEntry);

//-------------Log Entry Creation----------------------------
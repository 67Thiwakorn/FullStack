function criticalCode() {
    throw new Error("Something went wrong!");
}

function logError(theException) {
    console.log(theException);
}

console.log("\n--- Try Catch Example ---");
try {
    criticalCode();
} catch (error) {
    logError(error);
}

console.log("\n---Throwing in Try Catch Example ---");
try {
    throw new Error("Manually thrown error!");
} catch (error) {
    logError(error);
} finally {
    console.log("Finally block executed.");
}

console.log("\n--- No Error Example ---");
try {
    throw "An exception that is thrown every time.";
} catch (error) {
    logError(error);
}

console.log("\n--- No Exception Example ---");
try {
    console.log("This code runs without errors.");  
} catch (error) {
    logError(error);
}   finally {
    console.log("Finally block executed.");
}

function hello() {
    console.log("Hello, World!");
}
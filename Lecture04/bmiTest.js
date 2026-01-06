const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your weight in kg: ', (weight) => {
    rl.question('Enter your height in meters: ', (height) => {
        const bmi = calculateBMI(parseFloat(weight), parseFloat(height));

        console.log(`Your BMI is: ${bmi.toFixed(2)}`);
        console.log(`BMI Category: ${getBMICategory(bmi)}`);

        rl.close();
    });
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

module.exports = { calculateBMI, getBMICategory };
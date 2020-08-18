//The BMI is defined as the body mass divided by the square of
//the body height, and is universally expressed in units of kg/m2,
//resulting from mass in kilograms and height in metres.
var calculateBmi = function (height, weight) {
    var bmi = weight / (height * height);
    if (bmi >= 40) {
        console.log("Oh, you dead. Your BMI is: " + bmi);
    }
    if (bmi >= 30 && bmi < 40) {
        console.log("Obese. Your BMI is: " + bmi);
    }
    if (bmi >= 25 && bmi < 30) {
        console.log("Overweight. Your BMI is: " + bmi);
    }
    if (bmi >= 18.5 && bmi < 25) {
        console.log("Normal. Your BMI is: " + bmi);
    }
    if (bmi < 18.5) {
        console.log("Skinny. Your BMI is: " + bmi);
    }
    return 'THIS IS A STRING';
};
var height = Number(process.argv[2]);
var weight = Number(process.argv[3]);
calculateBmi(height, weight);
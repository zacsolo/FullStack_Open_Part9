//The BMI is defined as the body mass divided by the square of
//the body height, and is universally expressed in units of kg/m2,
//resulting from mass in kilograms and height in metres.

export const calculateBmi = (height: number, weight: number): string => {
  const meters: number = height / 100;
  const bmi = weight / (meters * meters);
  if (bmi >= 40) {
    return `Oh, you dead. Your BMI is: ${bmi}`;
  }
  if (bmi >= 30 && bmi < 40) {
    return `Obese. Your BMI is: ${bmi}`;
  }
  if (bmi >= 25 && bmi < 30) {
    return `Overweight. Your BMI is: ${bmi}`;
  }
  if (bmi >= 18.5 && bmi < 25) {
    return `Normal. Your BMI is: ${bmi}`;
  }
  if (bmi < 18.5) {
    return `Skinny. Your BMI is: ${bmi}`;
  }
  return 'ERROR';
};

// const height: number = Number(process.argv[2]);
// const weight: number = Number(process.argv[3]);

// calculateBmi(height, weight);

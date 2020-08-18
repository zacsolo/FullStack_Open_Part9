interface exTracker {
  numOfdays: number;
  numOfTrainingDays: number;
  goalMet: boolean;
  rating: number;
  description: string;
  target: number;
  averageTime: number;
}

const calculateExercises = (
  target: number,
  exArr: Array<number>
): exTracker => {
  const numOfdays = exArr.length;

  const numOfTrainingDays: number = exArr.filter((day: number) => day !== 0)
    .length;

  let total: number = 0;
  exArr.map((num) => (total += num));

  const averageTime = total / numOfdays;

  const goalMet: boolean = averageTime > target ? true : false;

  let rating: number;
  let description: string =
    averageTime >= target
      ? ((rating = 3), 'Goal Met')
      : averageTime > target * 0.5
      ? ((rating = 2), 'Almost there!')
      : ((rating = 1), 'Not even close');

  console.log({
    numOfdays,
    numOfTrainingDays,
    goalMet,
    rating,
    description,
    target,
    averageTime,
  });
  return {
    numOfdays,
    numOfTrainingDays,
    goalMet,
    rating,
    description,
    target,
    averageTime,
  };
};

let exerciseDays: Array<number>;
let newArr = process.argv;
newArr.splice(0, 2);
exerciseDays = newArr.map((num) => Number(num));

const dailyGoal: number = exerciseDays[0];

calculateExercises(dailyGoal, exerciseDays);

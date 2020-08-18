var calculateExercises = function (exArr) {
    var numOfdays = exArr.length;
    console.log(numOfdays);
    var didTrain = exArr.filter(function (day) { return day !== 0; });
    var numOfTrainingDays = didTrain.length;
    console.log(numOfTrainingDays);
};
calculateExercises([2, 3, 4, 0, 8, 2, 0, 3]);

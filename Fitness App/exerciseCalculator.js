"use strict";
exports.__esModule = true;
exports.calculateExercises = void 0;
exports.calculateExercises = function (target, exArr) {
    var numOfdays = exArr.length;
    var numOfTrainingDays = exArr.filter(function (day) { return day !== 0; })
        .length;
    var total = 0;
    exArr.map(function (num) { return (total += num); });
    var averageTime = total / numOfdays;
    var goalMet = averageTime > target ? true : false;
    var rating;
    var description = averageTime >= target
        ? ((rating = 3), 'Goal Met')
        : averageTime > target * 0.5
            ? ((rating = 2), 'Almost there!')
            : ((rating = 1), 'Not even close');
    console.log({
        numOfdays: numOfdays,
        numOfTrainingDays: numOfTrainingDays,
        goalMet: goalMet,
        rating: rating,
        description: description,
        target: target,
        averageTime: averageTime
    });
    return {
        numOfdays: numOfdays,
        numOfTrainingDays: numOfTrainingDays,
        goalMet: goalMet,
        rating: rating,
        description: description,
        target: target,
        averageTime: averageTime
    };
};
var exerciseDays = [];
var newArr = process.argv;
newArr.splice(0, 2);
exerciseDays = newArr.map(function (num) { return Number(num); });
var dailyGoal = exerciseDays[0];
exports.calculateExercises(dailyGoal, exerciseDays);

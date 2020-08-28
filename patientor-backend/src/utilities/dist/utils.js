"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-explicit-any */
var types_1 = require("../types/types");
//HELPER FUNCTIONS___________
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var isGender = function (param) {
    return Object.values(types_1.Gender).includes(param);
};
var isDate = function (date) {
    return Boolean(Date.parse(date));
};
//________________________________
var parseStringValues = function (text) {
    if (!text || !isString(text)) {
        throw new Error("Incorrect or missing text: " + text);
    }
    return text;
};
var parseDate = function (date) {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error("Incorrect or missing date: " + date);
    }
    return date;
};
var parseGender = function (gender) {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing weather: ' + gender);
    }
    return gender;
};
var toNewPatientEntry = function (object) {
    return {
        name: parseStringValues(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseStringValues(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseStringValues(object.occupation),
        entries: []
    };
};
exports["default"] = toNewPatientEntry;

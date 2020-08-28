"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var patients_1 = require("../../data/patients");
var uuid_1 = require("uuid");
var newArr = [];
console.log(newArr);
var patient = patients_1["default"];
console.log('UNALTERED PATIENTS', patients_1["default"]);
console.log('___SERVICES___', patient);
var getAll = function () {
    return patient.map(function (_a) {
        var id = _a.id, name = _a.name, dateOfBirth = _a.dateOfBirth, gender = _a.gender, occupation = _a.occupation;
        return ({
            id: id,
            name: name,
            dateOfBirth: dateOfBirth,
            gender: gender,
            occupation: occupation
        });
    });
};
var findOne = function (id) {
    var person = patient.find(function (p) { return p.id === id; });
    if (!person) {
        return;
    }
    return person;
};
var addPatient = function (entry) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
    var id = uuid_1.v4();
    var newPatientEntry = __assign({ id: id }, entry);
    patient.push(newPatientEntry);
    return newPatientEntry;
};
var addEntry = function (id, entry) {
    var person = patient.find(function (p) { return p.id === id; });
    if (!person) {
        return;
    }
    person.entries.push(entry);
    return person.entries;
};
var getEntries = function (id) {
    var person = patient.find(function (p) { return p.id === id; });
    if (!person) {
        return;
    }
    return person.entries;
};
exports["default"] = {
    getAll: getAll,
    addPatient: addPatient,
    findOne: findOne,
    addEntry: addEntry,
    getEntries: getEntries
};

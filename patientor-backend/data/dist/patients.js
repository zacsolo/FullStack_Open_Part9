"use strict";
exports.__esModule = true;
var newPatientData_1 = require("./newPatientData");
var utils_1 = require("../src/utilities/utils");
var allPatientEntries = newPatientData_1["default"].map(function (obj) {
    console.log('OBJECT BEING PASSED IN _____', obj);
    var object = utils_1["default"](obj);
    object.id = obj.id;
    return object;
});
exports["default"] = allPatientEntries;

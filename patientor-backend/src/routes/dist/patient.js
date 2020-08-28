"use strict";
exports.__esModule = true;
var express_1 = require("express");
var patient_1 = require("../services/patient");
var utils_1 = require("../utilities/utils");
var router = express_1["default"].Router();
router.get('/', function (_req, res) {
    var allData = patient_1["default"].getAll();
    res.send(allData);
});
router.get('/:id', function (req, res) {
    var params = req.params;
    var onePatient = patient_1["default"].findOne(params.id);
    res.send(onePatient);
});
router.post('/', function (req, res) {
    try {
        var newPatientEntry = utils_1["default"](req.body);
        var savedPatient = patient_1["default"].addPatient(newPatientEntry);
        res.json(savedPatient);
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
exports["default"] = router;

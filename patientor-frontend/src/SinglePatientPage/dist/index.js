"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
var constants_1 = require("../constants");
var state_1 = require("../state");
var reducer_1 = require("../state/reducer");
var SinglePatientPage = function () {
    var id = react_router_dom_1.useParams().id;
    var _a = state_1.useStateValue(), singlePatient = _a[0].singlePatient, dispatch = _a[1];
    react_1.useEffect(function () {
        var fetchSinglePatient = function (id) { return __awaiter(void 0, void 0, void 0, function () {
            var patientData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get(constants_1.apiBaseUrl + "/patients/" + id)];
                    case 1:
                        patientData = (_a.sent()).data;
                        dispatch(reducer_1.setSinglePatient(patientData));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchSinglePatient(id);
    }, [dispatch]);
    if (singlePatient) {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'space-around'
                } },
                react_1["default"].createElement("h2", null, singlePatient.name),
                react_1["default"].createElement(semantic_ui_react_1.Icon, { size: 'big', name: singlePatient.gender === 'male' ? 'man' : 'woman' })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null,
                    "ssn: ",
                    singlePatient.ssn),
                react_1["default"].createElement("p", null,
                    "occupation: ",
                    singlePatient.occupation)),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h3", null, "Entries"),
                react_1["default"].createElement("p", null, singlePatient.entries.map(function (e) { return (react_1["default"].createElement("div", { key: e.id },
                    react_1["default"].createElement("p", null, e.date),
                    react_1["default"].createElement("p", null, e.description),
                    react_1["default"].createElement("p", null, e.description))); })))));
    }
    else {
        return react_1["default"].createElement("div", null, "Loading....");
    }
};
exports["default"] = SinglePatientPage;

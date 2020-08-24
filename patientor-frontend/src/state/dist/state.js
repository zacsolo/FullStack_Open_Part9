"use strict";
exports.__esModule = true;
exports.useStateValue = exports.StateProvider = exports.StateContext = void 0;
var react_1 = require("react");
var initialState = {
    patients: {}
};
exports.StateContext = react_1.createContext([
    initialState,
    function () { return initialState; },
]);
exports.StateProvider = function (_a) {
    var reducer = _a.reducer, children = _a.children;
    var _b = react_1.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    return (react_1["default"].createElement(exports.StateContext.Provider, { value: [state, dispatch] }, children));
};
exports.useStateValue = function () { return react_1.useContext(exports.StateContext); };

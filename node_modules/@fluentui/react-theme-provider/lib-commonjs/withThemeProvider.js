"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ThemeProvider_1 = require("./ThemeProvider");
exports.withThemeProvider = function (Component) {
    return React.forwardRef(function (props, ref) { return (React.createElement(ThemeProvider_1.ThemeProvider, null,
        React.createElement(Component, tslib_1.__assign({}, props, { ref: ref })))); });
};
//# sourceMappingURL=withThemeProvider.js.map
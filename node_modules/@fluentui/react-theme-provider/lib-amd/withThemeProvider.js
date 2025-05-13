define(["require", "exports", "tslib", "react", "./ThemeProvider"], function (require, exports, tslib_1, React, ThemeProvider_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withThemeProvider = function (Component) {
        return React.forwardRef(function (props, ref) { return (React.createElement(ThemeProvider_1.ThemeProvider, null,
            React.createElement(Component, tslib_1.__assign({}, props, { ref: ref })))); });
    };
});
//# sourceMappingURL=withThemeProvider.js.map
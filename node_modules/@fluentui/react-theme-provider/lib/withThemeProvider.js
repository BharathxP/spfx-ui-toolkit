import { __assign } from "tslib";
import * as React from 'react';
import { ThemeProvider } from './ThemeProvider';
export var withThemeProvider = function (Component) {
    return React.forwardRef(function (props, ref) { return (React.createElement(ThemeProvider, null,
        React.createElement(Component, __assign({}, props, { ref: ref })))); });
};
//# sourceMappingURL=withThemeProvider.js.map
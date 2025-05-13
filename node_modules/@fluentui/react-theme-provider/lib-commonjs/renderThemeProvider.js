"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var index_1 = require("@fluentui/react-compose/lib-commonjs/next/index");
var utilities_1 = require("@uifabric/utilities");
var ThemeContext_1 = require("./ThemeContext");
var useStyleRenderer_1 = require("./styleRenderers/useStyleRenderer");
exports.renderThemeProvider = function (state) {
    var _a = index_1.getSlots(state), slots = _a.slots, slotProps = _a.slotProps;
    var theme = state.theme, customizerContext = state.customizerContext;
    return (React.createElement(ThemeContext_1.ThemeContext.Provider, { value: theme },
        React.createElement(useStyleRenderer_1.StyleRendererContext.Provider, { value: state.renderer },
            React.createElement(utilities_1.CustomizerContext.Provider, { value: customizerContext },
                React.createElement(slots.root, tslib_1.__assign({}, slotProps.root))))));
};
//# sourceMappingURL=renderThemeProvider.js.map
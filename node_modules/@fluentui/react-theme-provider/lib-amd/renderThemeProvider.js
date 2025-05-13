define(["require", "exports", "tslib", "react", "@fluentui/react-compose/lib/next/index", "@uifabric/utilities", "./ThemeContext", "./styleRenderers/useStyleRenderer"], function (require, exports, tslib_1, React, index_1, utilities_1, ThemeContext_1, useStyleRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderThemeProvider = function (state) {
        var _a = index_1.getSlots(state), slots = _a.slots, slotProps = _a.slotProps;
        var theme = state.theme, customizerContext = state.customizerContext;
        return (React.createElement(ThemeContext_1.ThemeContext.Provider, { value: theme },
            React.createElement(useStyleRenderer_1.StyleRendererContext.Provider, { value: state.renderer },
                React.createElement(utilities_1.CustomizerContext.Provider, { value: customizerContext },
                    React.createElement(slots.root, tslib_1.__assign({}, slotProps.root))))));
    };
});
//# sourceMappingURL=renderThemeProvider.js.map
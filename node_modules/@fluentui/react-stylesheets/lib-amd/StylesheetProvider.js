define(["require", "exports", "tslib", "react", "./StylesheetContext"], function (require, exports, tslib_1, React, StylesheetContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Provider for registering stylesheets in a given target document.
     * The `register` method can be called many times and will only register once
     * per unique target document.
     */
    exports.StylesheetProvider = function (props) {
        var context = React.useContext(StylesheetContext_1.StylesheetContext);
        var mergedContext = React.useMemo(function () { return (tslib_1.__assign(tslib_1.__assign({}, context), props)); }, 
        // Only recompute the context to pass down if the parent passes a new one. Props should not
        // be mutating dynamically for a provider, or may be doing so accidentally. Avoid recomputations.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [context]);
        return React.createElement(StylesheetContext_1.StylesheetContext.Provider, { value: mergedContext }, props.children);
    };
    exports.StylesheetConsumer = StylesheetContext_1.StylesheetContext.Consumer;
});
//# sourceMappingURL=StylesheetProvider.js.map
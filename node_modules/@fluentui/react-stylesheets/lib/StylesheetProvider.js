import { __assign } from "tslib";
import * as React from 'react';
import { StylesheetContext } from './StylesheetContext';
/**
 * Provider for registering stylesheets in a given target document.
 * The `register` method can be called many times and will only register once
 * per unique target document.
 */
export var StylesheetProvider = function (props) {
    var context = React.useContext(StylesheetContext);
    var mergedContext = React.useMemo(function () { return (__assign(__assign({}, context), props)); }, 
    // Only recompute the context to pass down if the parent passes a new one. Props should not
    // be mutating dynamically for a provider, or may be doing so accidentally. Avoid recomputations.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [context]);
    return React.createElement(StylesheetContext.Provider, { value: mergedContext }, props.children);
};
export var StylesheetConsumer = StylesheetContext.Consumer;
//# sourceMappingURL=StylesheetProvider.js.map
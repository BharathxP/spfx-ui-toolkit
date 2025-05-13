"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderThemeProvider_1 = require("./renderThemeProvider");
var index_1 = require("@fluentui/react-compose/lib-commonjs/next/index");
var useThemeProviderState_1 = require("./useThemeProviderState");
var react_hooks_1 = require("@uifabric/react-hooks");
var mergeProps = index_1.makeMergeProps();
/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
exports.useThemeProvider = function (props, ref, defaultProps) {
    var rootRef = react_hooks_1.useMergedRefs(ref, React.useRef(null));
    var state = mergeProps({
        ref: rootRef,
        as: 'div',
    }, defaultProps, props);
    // Apply changes to state.
    useThemeProviderState_1.useThemeProviderState(state);
    return {
        state: state,
        render: renderThemeProvider_1.renderThemeProvider,
    };
};
//# sourceMappingURL=useThemeProvider.js.map
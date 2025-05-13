define(["require", "exports", "react", "./renderThemeProvider", "@fluentui/react-compose/lib/next/index", "./useThemeProviderState", "@uifabric/react-hooks"], function (require, exports, React, renderThemeProvider_1, index_1, useThemeProviderState_1, react_hooks_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=useThemeProvider.js.map
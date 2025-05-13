import * as React from 'react';
import { renderThemeProvider as render } from './renderThemeProvider';
import { makeMergeProps } from '@fluentui/react-compose/lib/next/index';
import { useThemeProviderState } from './useThemeProviderState';
import { useMergedRefs } from '@uifabric/react-hooks';
var mergeProps = makeMergeProps();
/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
export var useThemeProvider = function (props, ref, defaultProps) {
    var rootRef = useMergedRefs(ref, React.useRef(null));
    var state = mergeProps({
        ref: rootRef,
        as: 'div',
    }, defaultProps, props);
    // Apply changes to state.
    useThemeProviderState(state);
    return {
        state: state,
        render: render,
    };
};
//# sourceMappingURL=useThemeProvider.js.map
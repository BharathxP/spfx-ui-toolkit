import * as React from 'react';
import { useThemeProviderClasses } from './useThemeProviderClasses';
import { useThemeProvider } from './useThemeProvider';
import { mergeStylesRenderer } from './styleRenderers/mergeStylesRenderer';
import { useStylesheet } from '@fluentui/react-stylesheets';
import { useFocusRects } from '@uifabric/utilities';
/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
export var ThemeProvider = React.forwardRef(function (props, ref) {
    var _a = useThemeProvider(props, ref, {
        // The renderer default value is required to be defined, so if you're recomposing
        // this component, be sure to do so.
        renderer: mergeStylesRenderer,
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Register stylesheets as needed.
    useStylesheet(state.theme.stylesheets);
    // Render styles.
    useThemeProviderClasses(state);
    // Apply focus rect class on key presses.
    useFocusRects(state.ref);
    // Return the rendered content.
    return render(state);
});
ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map
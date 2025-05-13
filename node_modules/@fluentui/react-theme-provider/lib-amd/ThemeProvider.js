define(["require", "exports", "react", "./useThemeProviderClasses", "./useThemeProvider", "./styleRenderers/mergeStylesRenderer", "@fluentui/react-stylesheets", "@uifabric/utilities"], function (require, exports, React, useThemeProviderClasses_1, useThemeProvider_1, mergeStylesRenderer_1, react_stylesheets_1, utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ThemeProvider, used for providing css variables and registering stylesheets.
     */
    exports.ThemeProvider = React.forwardRef(function (props, ref) {
        var _a = useThemeProvider_1.useThemeProvider(props, ref, {
            // The renderer default value is required to be defined, so if you're recomposing
            // this component, be sure to do so.
            renderer: mergeStylesRenderer_1.mergeStylesRenderer,
            applyTo: 'element',
        }), render = _a.render, state = _a.state;
        // Register stylesheets as needed.
        react_stylesheets_1.useStylesheet(state.theme.stylesheets);
        // Render styles.
        useThemeProviderClasses_1.useThemeProviderClasses(state);
        // Apply focus rect class on key presses.
        utilities_1.useFocusRects(state.ref);
        // Return the rendered content.
        return render(state);
    });
    exports.ThemeProvider.displayName = 'ThemeProvider';
});
//# sourceMappingURL=ThemeProvider.js.map
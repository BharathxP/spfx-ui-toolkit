define(["require", "exports", "react", "@uifabric/utilities", "@fluentui/theme", "./ThemeContext"], function (require, exports, react_1, utilities_1, theme_1, ThemeContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Get theme from CustomizerContext or Customizations singleton.
     */
    function useCompatTheme() {
        return utilities_1.useCustomizationSettings(['theme']).theme;
    }
    /**
     * React hook for programmatically accessing the theme.
     */
    exports.useTheme = function () {
        var theme = react_1.useContext(ThemeContext_1.ThemeContext);
        var legacyTheme = useCompatTheme();
        return theme || legacyTheme || theme_1.createTheme({});
    };
});
//# sourceMappingURL=useTheme.js.map
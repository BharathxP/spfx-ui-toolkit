"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utilities_1 = require("@uifabric/utilities");
var theme_1 = require("@fluentui/theme");
var ThemeContext_1 = require("./ThemeContext");
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
//# sourceMappingURL=useTheme.js.map
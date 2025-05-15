import { createTheme, getTheme } from "office-ui-fabric-react/lib/Styling";
export var fluentUIDefaultTheme = function () {
    var currentTheme;
    var themeColorsFromWindow = window.__themeState__.theme;
    if (themeColorsFromWindow) {
        currentTheme = createTheme({
            palette: themeColorsFromWindow
        });
    }
    else
        currentTheme = getTheme();
    return currentTheme;
};
//# sourceMappingURL=FluentUIDefaultTheme.js.map
define(["require", "exports", "react", "./StylesheetContext"], function (require, exports, React, StylesheetContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A hook for providing a stylesheet or array of stylesheets. Can be used standalone
     * or with the `StylesheetProvider` component to direct styles to be registered to a
     * different target such as a child window or as a string in SSR scenarios.
     */
    exports.useStylesheet = function (sheets) {
        var context = React.useContext(StylesheetContext_1.StylesheetContext);
        context.registerStyles(sheets, context);
    };
});
//# sourceMappingURL=useStylesheet.js.map
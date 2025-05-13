import * as React from 'react';
var defaultDocument = { document: 'document' };
/**
 * Register styles can be called with a single or multiple stylesheets. Each will be evaluated
 * if they've been registered already, and then passed along to `renderStyles` if they're new
 * to the given context.
 */
export var registerStyles = function (sheets, context) {
    var styleCache = context.styleCache, target = context.target;
    if (!sheets || sheets.length < 1) {
        return;
    }
    if (!Array.isArray(sheets)) {
        sheets = [sheets];
    }
    // Grab the style cache for the target document.
    var sheetsToRender = [];
    var cacheKey = target || defaultDocument;
    var targetStylesheets = styleCache.get(cacheKey);
    if (!targetStylesheets) {
        targetStylesheets = new Map();
        styleCache.set(cacheKey, targetStylesheets);
    }
    for (var _i = 0, sheets_1 = sheets; _i < sheets_1.length; _i++) {
        var sheet = sheets_1[_i];
        if (!targetStylesheets.has(sheet)) {
            sheetsToRender.push(sheet);
            targetStylesheets.set(sheet, true);
        }
    }
    if (sheetsToRender.length) {
        context.renderStyles(sheetsToRender, context);
    }
};
/**
 * Default renderStyles implementation, which will render the give sheets to the contextual
 * target.
 */
var renderStyles = function (sheets, context) {
    var target = context.target;
    if (sheets.length && target) {
        var styleElement = target.createElement('style');
        styleElement.textContent = sheets.join('');
        target.head.appendChild(styleElement);
    }
};
// Shared stylesheet context, providing the registration function and target document.
export var StylesheetContext = React.createContext({
    registerStyles: registerStyles,
    renderStyles: renderStyles,
    target: typeof window === 'object' ? window.document : undefined,
    styleCache: new WeakMap(),
});
//# sourceMappingURL=StylesheetContext.js.map
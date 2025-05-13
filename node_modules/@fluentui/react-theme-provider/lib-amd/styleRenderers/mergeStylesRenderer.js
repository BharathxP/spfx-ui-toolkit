define(["require", "exports", "react", "./useStyleRenderer", "@uifabric/merge-styles"], function (require, exports, React, useStyleRenderer_1, merge_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _seed = 0;
    exports.mergeStylesRenderer = {
        reset: function () {
            // If the stylesheet reset call is made, invalidate the cache keys.
            merge_styles_1.Stylesheet.getInstance().onReset(function () { return _seed++; });
        },
        getId: function () { return _seed; },
        renderStyles: function (styleSet, options) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return merge_styles_1.mergeCssSets((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
        },
        renderFontFace: function (fontFace, options) {
            return merge_styles_1.fontFace(fontFace);
        },
        renderKeyframes: function (keyframes) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return merge_styles_1.keyframes(keyframes);
        },
    };
    exports.MergeStylesProvider = function (_a) {
        var children = _a.children;
        return (React.createElement(useStyleRenderer_1.StyleRendererContext.Provider, { value: exports.mergeStylesRenderer }, children));
    };
});
//# sourceMappingURL=mergeStylesRenderer.js.map
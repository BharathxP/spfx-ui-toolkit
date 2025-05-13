import * as React from 'react';
import { StyleRendererContext } from './useStyleRenderer';
import { Stylesheet, mergeCssSets, fontFace as mergeFontFace, keyframes as mergeKeyframes, } from '@uifabric/merge-styles';
var _seed = 0;
export var mergeStylesRenderer = {
    reset: function () {
        // If the stylesheet reset call is made, invalidate the cache keys.
        Stylesheet.getInstance().onReset(function () { return _seed++; });
    },
    getId: function () { return _seed; },
    renderStyles: function (styleSet, options) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return mergeCssSets((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
    },
    renderFontFace: function (fontFace, options) {
        return mergeFontFace(fontFace);
    },
    renderKeyframes: function (keyframes) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return mergeKeyframes(keyframes);
    },
};
export var MergeStylesProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(StyleRendererContext.Provider, { value: mergeStylesRenderer }, children));
};
//# sourceMappingURL=mergeStylesRenderer.js.map
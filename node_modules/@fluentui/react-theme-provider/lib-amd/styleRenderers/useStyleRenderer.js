define(["require", "exports", "react", "./mergeStylesRenderer"], function (require, exports, React, mergeStylesRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StyleRendererContext = React.createContext(mergeStylesRenderer_1.mergeStylesRenderer);
    exports.useStyleRenderer = function () { return React.useContext(exports.StyleRendererContext); };
});
//# sourceMappingURL=useStyleRenderer.js.map
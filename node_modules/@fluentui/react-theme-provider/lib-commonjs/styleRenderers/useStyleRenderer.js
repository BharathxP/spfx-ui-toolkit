"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mergeStylesRenderer_1 = require("./mergeStylesRenderer");
exports.StyleRendererContext = React.createContext(mergeStylesRenderer_1.mergeStylesRenderer);
exports.useStyleRenderer = function () { return React.useContext(exports.StyleRendererContext); };
//# sourceMappingURL=useStyleRenderer.js.map
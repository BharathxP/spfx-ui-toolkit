import * as React from 'react';
import { mergeStylesRenderer } from './mergeStylesRenderer';
export var StyleRendererContext = React.createContext(mergeStylesRenderer);
export var useStyleRenderer = function () { return React.useContext(StyleRendererContext); };
//# sourceMappingURL=useStyleRenderer.js.map
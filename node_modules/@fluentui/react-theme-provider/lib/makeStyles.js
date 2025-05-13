import { useTheme } from './useTheme';
import { useWindow } from '@fluentui/react-window-provider';
import { useStyleRenderer } from './styleRenderers/useStyleRenderer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var graphGet = function (graphNode, path) {
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var key = path_1[_i];
        graphNode = graphNode.get(key);
        if (!graphNode) {
            return;
        }
    }
    return graphNode;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var graphSet = function (graphNode, path, value) {
    for (var i = 0; i < path.length - 1; i++) {
        var key = path[i];
        var current = graphNode.get(key);
        if (!current) {
            current = new Map();
            graphNode.set(key, current);
        }
        graphNode = current;
    }
    graphNode.set(path[path.length - 1], value);
};
/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 */
export function makeStyles(styleOrFunction) {
    // Create graph of inputs to map to output.
    var graph = new Map();
    return function (options) {
        if (options === void 0) { options = {}; }
        var theme = options.theme, renderer = options.renderer;
        var win = useWindow();
        var contextualTheme = useTheme();
        var contextualRenderer = useStyleRenderer();
        theme = theme || contextualTheme || {};
        renderer = (renderer || contextualRenderer);
        var id = renderer.getId();
        var isStyleFunction = typeof styleOrFunction === 'function';
        var path = isStyleFunction ? [id, win, theme] : [id, win];
        var value = graphGet(graph, path);
        if (!value) {
            var styles = isStyleFunction ? styleOrFunction(theme) : styleOrFunction;
            value = renderer.renderStyles(styles, { targetWindow: win, rtl: !!theme.rtl });
            graphSet(graph, path, value);
        }
        return value;
    };
}
//# sourceMappingURL=makeStyles.js.map
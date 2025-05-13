/* eslint-disable @typescript-eslint/no-explicit-any */
import { tokensToStyleObject } from './tokensToStyleObject';
import { makeClasses } from './makeClasses';
/**
 * Calls a function with the argument, or returns the given object.
 * @param objOrFunc - Function or object.
 * @param argument - Argument to pass if a function is provided.
 */
var callOrReturn = function (objOrFunc, argument) {
    return typeof objOrFunc === 'function' ? objOrFunc(argument) : objOrFunc;
};
var processVariants = function (variants, theme, name, prefix) {
    var result = {};
    if (variants) {
        variants = callOrReturn(variants, theme);
        for (var _i = 0, _a = Object.keys(variants); _i < _a.length; _i++) {
            var variantName = _a[_i];
            var modifierName = variantName === 'root' ? variantName : '_' + variantName;
            var rule = (result[modifierName] = tokensToStyleObject(variants[variantName], prefix));
            // The display name should be tied to the unique theme object, causing the
            // renderer to treat scoped themes as sandboxed css scopes.
            if (name) {
                rule.displayName = "" + name + (theme.id || '');
                if (variantName !== 'root') {
                    rule.displayName += "--" + variantName;
                }
            }
        }
    }
    return result;
};
/**
 * Hook factory for creating a `use*Variants` helper. Variants represent a configuration of
 * token values mapped to modifiers on the component. A variant can also be referenced using
 * a variant string. Variants can be overridden through the theme of the component.
 */
export var makeVariantClasses = function (options) {
    var styles = options.styles, variants = options.variants, name = options.name, prefix = options.prefix;
    // This function will only be called when styles have not been evaluated for this set for
    // the particular theme/window/direction combo.
    var styleFunction = function (theme) {
        var _a, _b, _c;
        var themeVariants = name ? (_c = (_b = (_a = theme) === null || _a === void 0 ? void 0 : _a.components) === null || _b === void 0 ? void 0 : _b[name]) === null || _c === void 0 ? void 0 : _c.variants : undefined;
        return [
            callOrReturn(styles, theme),
            processVariants(variants, theme, name, prefix),
            processVariants(themeVariants, theme, name, prefix),
        ];
    };
    return makeClasses(styleFunction);
};
//# sourceMappingURL=makeVariantClasses.js.map
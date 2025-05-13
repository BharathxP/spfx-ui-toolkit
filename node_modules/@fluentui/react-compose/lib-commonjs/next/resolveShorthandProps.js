"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
/**
 * Ensures that the given slots are represented using object syntax. This ensures that
 * the object can be merged along with other objects.
 * @param props - The incoming props
 * @param shorthandPropNames - An array of prop names to apply simplification to
 */
exports.resolveShorthandProps = function (props, shorthandPropNames) {
    var newProps = props;
    if (shorthandPropNames && shorthandPropNames.length) {
        newProps = tslib_1.__assign({}, props);
        for (var _i = 0, shorthandPropNames_1 = shorthandPropNames; _i < shorthandPropNames_1.length; _i++) {
            var propName = shorthandPropNames_1[_i];
            var propValue = props[propName];
            if (propValue !== undefined && (typeof propValue !== 'object' || React.isValidElement(propValue))) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                newProps[propName] = { children: propValue };
            }
        }
    }
    return newProps;
};
//# sourceMappingURL=resolveShorthandProps.js.map
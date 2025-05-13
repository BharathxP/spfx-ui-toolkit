import { __assign } from "tslib";
import { tokensToStyleObject } from './tokensToStyleObject';
export var getStyleFromPropsAndOptions = function (props, options, prefix) {
    var rootSlotStyle = {};
    options.slotProps.forEach(function (definition) {
        var _a;
        var nextSlotProps = definition(props);
        rootSlotStyle = __assign(__assign({}, rootSlotStyle), (_a = nextSlotProps.root) === null || _a === void 0 ? void 0 : _a.style);
    });
    return __assign(__assign(__assign({}, props.style), rootSlotStyle), tokensToStyleObject(props.tokens, prefix));
};
//# sourceMappingURL=getStyleFromPropsAndOptions.js.map
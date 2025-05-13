"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tokensToStyleObject_1 = require("./tokensToStyleObject");
exports.getStyleFromPropsAndOptions = function (props, options, prefix) {
    var rootSlotStyle = {};
    options.slotProps.forEach(function (definition) {
        var _a;
        var nextSlotProps = definition(props);
        rootSlotStyle = tslib_1.__assign(tslib_1.__assign({}, rootSlotStyle), (_a = nextSlotProps.root) === null || _a === void 0 ? void 0 : _a.style);
    });
    return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props.style), rootSlotStyle), tokensToStyleObject_1.tokensToStyleObject(props.tokens, prefix));
};
//# sourceMappingURL=getStyleFromPropsAndOptions.js.map
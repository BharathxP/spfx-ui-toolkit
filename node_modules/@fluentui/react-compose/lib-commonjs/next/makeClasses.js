"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appendClasses_1 = require("../appendClasses");
var createClassResolver_1 = require("../createClassResolver");
exports.makeClasses = function (classes) {
    // This is in creation time, so this will happen once per css file.
    var _a = createClassResolver_1.createResolvedMap(classes), slots = _a.slots, modifiers = _a.modifiers, enums = _a.enums;
    return function useClasses(state) {
        var _a;
        var modifierClasses = '';
        var enumClasses = '';
        for (var _i = 0, _b = Object.keys(modifiers); _i < _b.length; _i++) {
            var modifierName = _b[_i];
            if (state[modifierName]) {
                modifierClasses = appendClasses_1.appendClasses(modifierClasses, modifiers[modifierName]);
            }
        }
        for (var _c = 0, _d = Object.keys(enums); _c < _d.length; _c++) {
            var enumName = _d[_c];
            var enumValues = enums[enumName];
            // if we have a class which matches the enumName and current state value, add it.
            if (enumValues[state[enumName]] !== undefined) {
                enumClasses = appendClasses_1.appendClasses(enumClasses, enumValues[state[enumName]]);
            }
        }
        state.className = appendClasses_1.appendClasses(state.className, slots.root, modifierClasses, enumClasses);
        for (var _e = 0, _f = Object.keys(slots); _e < _f.length; _e++) {
            var slotName = _f[_e];
            if (slotName !== 'root') {
                state[slotName] = state[slotName] || {};
                state[slotName].className = appendClasses_1.appendClasses((_a = state[slotName]) === null || _a === void 0 ? void 0 : _a.className, slots[slotName]);
            }
        }
    };
};
//# sourceMappingURL=makeClasses.js.map
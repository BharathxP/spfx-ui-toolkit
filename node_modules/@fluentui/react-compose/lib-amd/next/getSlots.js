define(["require", "exports", "react", "@uifabric/utilities", "./nullRender"], function (require, exports, React, utilities_1, nullRender_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Given the state and an array of slot names, will break out `slots` and `slotProps`
     * collections.
     *
     * The root is always derived from the `as` prop.
     *
     * Slots will render as null if they are rendered as primitives with undefined children.
     *
     * The slotProps will always omit the `as` prop within them, and for slots that are string
     * primitives, the props will be filtered according the the slot type. For example, if the
     * slot is rendered `as: 'a'`, the props will be filtered for acceptable anchor props.
     *
     * @param state - State including slot definitions
     * @param slotNames - Name of which props are slots
     * @returns An object containing the `slots` map and `slotProps` map.
     */
    exports.getSlots = function (state, slotNames) {
        var slots = {
            root: state.as || 'div',
        };
        var slotProps = {
            root: typeof state.as === 'string' ? utilities_1.getNativeElementProps(state.as, state) : utilities_1.omit(state, ['as']),
        };
        if (slotNames) {
            for (var _i = 0, slotNames_1 = slotNames; _i < slotNames_1.length; _i++) {
                var name_1 = slotNames_1[_i];
                var slotDefinition = state[name_1] || {};
                var _a = slotDefinition.as, slotAs = _a === void 0 ? 'span' : _a, children = slotDefinition.children;
                var isSlotPrimitive = typeof slotAs === 'string';
                var isSlotEmpty = isSlotPrimitive && slotDefinition.children === undefined;
                slots[name_1] = isSlotEmpty ? nullRender_1.nullRender : slotAs;
                if (typeof children === 'function') {
                    slotProps[name_1] = {
                        children: children(slots[name_1], utilities_1.omit(slotDefinition, ['as', 'children'])),
                    };
                    slots[name_1] = React.Fragment;
                }
                else if (slots[name_1] !== nullRender_1.nullRender) {
                    slotProps[name_1] = isSlotPrimitive
                        ? utilities_1.getNativeElementProps(slotAs, slotDefinition)
                        : utilities_1.omit(slotDefinition, ['as']);
                }
            }
        }
        return { slots: slots, slotProps: slotProps };
    };
});
//# sourceMappingURL=getSlots.js.map
import { __spreadArrays } from "tslib";
import * as React from 'react';
import { css } from '@uifabric/utilities';
/**
 * Helper which deep clones props, but respectively assigns JSX, object refs, and class names
 * appropriately.
 *
 * @param target - the target object to merge onto.
 * @param propSets - one or more prop sets to deep merge onto the target.
 */
export var makeMergeProps = function (options) {
    if (options === void 0) { options = {}; }
    var deepMerge = __spreadArrays((options.deepMerge || []), ['style']);
    var mergeProps = function (target) {
        var propSets = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            propSets[_i - 1] = arguments[_i];
        }
        for (var _a = 0, propSets_1 = propSets; _a < propSets_1.length; _a++) {
            var props = propSets_1[_a];
            if (props) {
                for (var _b = 0, _c = Object.keys(props); _b < _c.length; _b++) {
                    var propName = _c[_b];
                    var propValue = props[propName];
                    var propValueType = typeof propValue;
                    if (propValue !== undefined) {
                        if (propValue && propValueType === 'object') {
                            if (Array.isArray(propValue)) {
                                // for arrays, replace.
                                target[propName] = propValue;
                            }
                            else {
                                target[propName] = target[propName] || {};
                                if (typeof target[propName] !== 'object' ||
                                    React.isValidElement(propValue) ||
                                    (propValue && typeof propValue === 'object' && propValue.hasOwnProperty('current')) ||
                                    deepMerge.indexOf(propName) === -1) {
                                    // if target is not an object, or value is JSX,  or a ref object, replace
                                    target[propName] = propValue;
                                }
                                else {
                                    // else deep merge.
                                    mergeProps(target[propName], propValue);
                                }
                            }
                        }
                        else if (propName === 'className') {
                            if (propValue) {
                                // for classnames, append
                                target[propName] = css(target[propName], propValue);
                            }
                        }
                        else {
                            target[propName] = propValue;
                        }
                    }
                }
            }
        }
        return target;
    };
    return mergeProps;
};
//# sourceMappingURL=makeMergeProps.js.map
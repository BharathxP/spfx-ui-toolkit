"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tokensToStyleObject_1 = require("./tokensToStyleObject");
/**
 * Hook which given draftState, will ensure that tokens are spit out to inline styles.
 * @param draftState - state to read and manipulate. Expected to have `tokens` prop, will
 * transform into inline
 * @param prefix - prefix to prepend to variables (e.g. "--button")
 */
exports.useInlineTokens = function (draftState, prefix) {
    var tokens = draftState.tokens, style = draftState.style;
    if (tokens) {
        draftState.style = style || {};
        tokensToStyleObject_1.tokensToStyleObject(tokens, prefix, draftState.style);
    }
};
//# sourceMappingURL=useInlineTokens.js.map
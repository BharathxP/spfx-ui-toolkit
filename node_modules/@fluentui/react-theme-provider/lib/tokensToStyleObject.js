export var tokensToStyleObject = function (tokens, prefix, style) {
    if (style === void 0) { style = {}; }
    var hasCheckedObject = false;
    if (tokens) {
        for (var _i = 0, _a = Object.keys(tokens); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            // On the first token property, check if this object has already been tokenized.
            if (!hasCheckedObject) {
                if (name_1.indexOf('--') === 0) {
                    return tokens;
                }
                hasCheckedObject = true;
            }
            var varName = prefix ? "" + prefix + (name_1 === 'default' ? '' : '-' + name_1) : "--" + name_1;
            var varValue = tokens[name_1];
            if (varValue && typeof varValue === 'object') {
                tokensToStyleObject(varValue, varName, style);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style[varName] = varValue;
            }
        }
    }
    return style;
};
//# sourceMappingURL=tokensToStyleObject.js.map
define(["require", "exports", "react", "@uifabric/utilities", "@fluentui/react-window-provider", "./makeStyles", "./tokensToStyleObject"], function (require, exports, React, utilities_1, react_window_provider_1, makeStyles_1, tokensToStyleObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var useThemeProviderStyles = makeStyles_1.makeStyles(function (theme) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        var tokens = theme.tokens;
        var tokenStyles = tokensToStyleObject_1.tokensToStyleObject(tokens);
        return {
            root: tokenStyles,
            body: [
                {
                    color: (_c = (_b = (_a = tokens) === null || _a === void 0 ? void 0 : _a.color) === null || _b === void 0 ? void 0 : _b.body) === null || _c === void 0 ? void 0 : _c.contentColor,
                    background: (_f = (_e = (_d = tokens) === null || _d === void 0 ? void 0 : _d.color) === null || _e === void 0 ? void 0 : _e.body) === null || _f === void 0 ? void 0 : _f.background,
                    fontFamily: (_h = (_g = tokens) === null || _g === void 0 ? void 0 : _g.body) === null || _h === void 0 ? void 0 : _h.fontFamily,
                    fontWeight: (_k = (_j = tokens) === null || _j === void 0 ? void 0 : _j.body) === null || _k === void 0 ? void 0 : _k.fontWeight,
                    fontSize: (_m = (_l = tokens) === null || _l === void 0 ? void 0 : _l.body) === null || _m === void 0 ? void 0 : _m.fontSize,
                    MozOsxFontSmoothing: (_p = (_o = tokens) === null || _o === void 0 ? void 0 : _o.body) === null || _p === void 0 ? void 0 : _p.mozOsxFontSmoothing,
                    WebkitFontSmoothing: (_r = (_q = tokens) === null || _q === void 0 ? void 0 : _q.body) === null || _r === void 0 ? void 0 : _r.webkitFontSmoothing,
                },
            ],
        };
    });
    /**
     * Hook to add class to body element.
     */
    function useApplyClassToBody(state, classesToApply) {
        var _a;
        var applyTo = state.applyTo;
        var applyToBody = applyTo === 'body';
        var body = (_a = react_window_provider_1.useDocument()) === null || _a === void 0 ? void 0 : _a.body;
        React.useEffect(function () {
            if (!applyToBody || !body) {
                return;
            }
            for (var _i = 0, classesToApply_1 = classesToApply; _i < classesToApply_1.length; _i++) {
                var classToApply = classesToApply_1[_i];
                if (classToApply) {
                    body.classList.add(classToApply);
                }
            }
            return function () {
                if (!applyToBody || !body) {
                    return;
                }
                for (var _i = 0, classesToApply_2 = classesToApply; _i < classesToApply_2.length; _i++) {
                    var classToApply = classesToApply_2[_i];
                    if (classToApply) {
                        body.classList.remove(classToApply);
                    }
                }
            };
        }, [applyToBody, body, classesToApply]);
    }
    function useThemeProviderClasses(state) {
        var classes = useThemeProviderStyles(state);
        var className = state.className, applyTo = state.applyTo;
        useApplyClassToBody(state, [classes.root, classes.body]);
        state.className = utilities_1.css(className, classes.root, applyTo === 'element' && classes.body);
    }
    exports.useThemeProviderClasses = useThemeProviderClasses;
});
//# sourceMappingURL=useThemeProviderClasses.js.map
import { __assign } from "tslib";
import * as React from 'react';
import { getSlots } from '@fluentui/react-compose/lib/next/index';
import { CustomizerContext } from '@uifabric/utilities';
import { ThemeContext } from './ThemeContext';
import { StyleRendererContext } from './styleRenderers/useStyleRenderer';
export var renderThemeProvider = function (state) {
    var _a = getSlots(state), slots = _a.slots, slotProps = _a.slotProps;
    var theme = state.theme, customizerContext = state.customizerContext;
    return (React.createElement(ThemeContext.Provider, { value: theme },
        React.createElement(StyleRendererContext.Provider, { value: state.renderer },
            React.createElement(CustomizerContext.Provider, { value: customizerContext },
                React.createElement(slots.root, __assign({}, slotProps.root))))));
};
//# sourceMappingURL=renderThemeProvider.js.map
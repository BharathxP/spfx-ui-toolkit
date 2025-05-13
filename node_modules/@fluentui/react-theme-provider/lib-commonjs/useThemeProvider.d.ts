import { ThemeProviderProps, ThemeProviderState } from './ThemeProvider.types';
import * as React from 'react';
/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
export declare const useThemeProvider: (props: ThemeProviderProps, ref: React.Ref<HTMLElement>, defaultProps: ThemeProviderProps) => {
    state: ThemeProviderState;
    render: (state: ThemeProviderState) => JSX.Element;
};

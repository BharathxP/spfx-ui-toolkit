import * as React from 'react';
import { TokenSetType } from '@fluentui/theme';
/**
 * Hook which given draftState, will ensure that tokens are spit out to inline styles.
 * @param draftState - state to read and manipulate. Expected to have `tokens` prop, will
 * transform into inline
 * @param prefix - prefix to prepend to variables (e.g. "--button")
 */
export declare const useInlineTokens: (draftState: {
    style?: React.CSSProperties | undefined;
    tokens?: TokenSetType | undefined;
}, prefix: string) => void;

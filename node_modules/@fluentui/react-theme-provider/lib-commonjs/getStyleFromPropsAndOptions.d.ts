import * as React from 'react';
import { StyleProps, StyleOptions } from './types';
export declare const getStyleFromPropsAndOptions: <TProps extends StyleProps<import("@fluentui/theme").ColorTokenSet>, TOptions extends StyleOptions<TProps>>(props: TProps, options: TOptions, prefix?: string | undefined) => React.CSSProperties;

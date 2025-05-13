import * as React from 'react';
import { StylesheetContextType } from './StylesheetContext';
import { StylesheetProviderProps } from './StylesheetProvider.types';
/**
 * Provider for registering stylesheets in a given target document.
 * The `register` method can be called many times and will only register once
 * per unique target document.
 */
export declare const StylesheetProvider: (props: React.PropsWithChildren<StylesheetProviderProps>) => JSX.Element;
export declare const StylesheetConsumer: React.Consumer<StylesheetContextType>;

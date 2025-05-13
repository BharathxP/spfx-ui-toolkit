import * as React from 'react';
export declare type HTMLDirection = 'rtl' | 'ltr' | 'auto';
declare const defaultDocument: {
    document: string;
};
export interface StylesheetContextType {
    target: Document | undefined;
    registerStyles: (stylesheets: undefined | string | string[], context: StylesheetContextType) => void;
    styleCache: WeakMap<Document | typeof defaultDocument, Map<string, boolean>>;
    renderStyles: (stylesheets: string[], context: StylesheetContextType) => void;
}
/**
 * Register styles can be called with a single or multiple stylesheets. Each will be evaluated
 * if they've been registered already, and then passed along to `renderStyles` if they're new
 * to the given context.
 */
export declare const registerStyles: (sheets: string | string[] | undefined, context: StylesheetContextType) => void;
export declare const StylesheetContext: React.Context<StylesheetContextType>;
export {};

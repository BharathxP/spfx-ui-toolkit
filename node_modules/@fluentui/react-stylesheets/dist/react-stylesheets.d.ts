import * as React from 'react';

declare const defaultDocument: {
    document: string;
};

export declare const StylesheetContext: React.Context<StylesheetContextType>;

declare interface StylesheetContextType {
    target: Document | undefined;
    registerStyles: (stylesheets: undefined | string | string[], context: StylesheetContextType) => void;
    styleCache: WeakMap<Document | typeof defaultDocument, Map<string, boolean>>;
    renderStyles: (stylesheets: string[], context: StylesheetContextType) => void;
}

/**
 * Provider for registering stylesheets in a given target document.
 * The `register` method can be called many times and will only register once
 * per unique target document.
 */
export declare const StylesheetProvider: (props: React.PropsWithChildren<StylesheetProviderProps>) => JSX.Element;

/**
 * Props for the StylesheetProvider conmponent.
 */
export declare interface StylesheetProviderProps {
    /**
     * Optional callback for overriding the default render function for rendering stylesheets.
     */
    renderStyles?: (stylesheets: string[], context: StylesheetProviderProps) => void;
    /**
     * Target document to render styles to. Defaults to the `document` global object.
     */
    target?: Document;
}

/**
 * A hook for providing a stylesheet or array of stylesheets. Can be used standalone
 * or with the `StylesheetProvider` component to direct styles to be registered to a
 * different target such as a child window or as a string in SSR scenarios.
 */
export declare const useStylesheet: (sheets: string | string[] | undefined) => void;

export { }

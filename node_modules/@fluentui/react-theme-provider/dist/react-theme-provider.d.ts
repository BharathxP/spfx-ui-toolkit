import { ColorTokenSet } from '@fluentui/theme';
import { ICustomizerContext } from '@uifabric/utilities';
import { IFontFace } from '@uifabric/merge-styles';
import { IKeyframes } from '@uifabric/merge-styles';
import { IRawFontStyle } from '@uifabric/merge-styles';
import { IRawStyle } from '@uifabric/merge-styles';
import { IStyle } from '@uifabric/merge-styles';
import { IStyleFunctionOrObject } from '@uifabric/merge-styles';
import { PartialTheme } from '@fluentui/theme';
import * as React from 'react';
import { Theme } from '@fluentui/theme';
import { TokenSetType } from '@fluentui/theme';
import { Variants } from '@fluentui/theme';

/**
 * The `applyClasses` takes in a mutable state and a class map and, given the class map
 * follows the a naming convention described below, auto-applies classes to the appropriate places
 * in the state.
 *
 * Usage:
 *
 * ```tsx
 * const useButtonClasses = makeClasses(theme => {
 *   root: { ... },
 *   _primary: { ... },
 *   _size_small: { ... }
 * });
 * ```
 *
 * The class naming convention is broken down as follows:
 *
 * * No underscores - a slot class name. (E.g. "root", "icon", etc)
 * * Prefixed with underscore - a modifier. (E.g. "_primary", "_fluid")
 * * Contains 2 underscores - a name/value matcher. (E.g. "_size_small")
 *
 * Modifier classnames are added to the root className when the state contains a truthy value
 * of the same name. For example, when the primary flag is present, the "_primary" modifier
 * class will be appended to the root className prop.
 *
 * Enum classnames are also added to the root className when teh state contains an enum value
 * which matches the value in the className. for example, when the `size` enum value is `small`,
 * the "_size_small" enum class will be appended to the root className prop.
 */
export declare const applyClasses: <TState extends {}>(state: TState, classMap: Record<string, string>) => void;

export declare type FontFace = IFontFace;

export declare const getStyleFromPropsAndOptions: <TProps extends StyleProps<import("@fluentui/theme").ColorTokenSet>, TOptions extends StyleOptions<TProps>>(props: TProps, options: TOptions, prefix?: string | undefined) => React.CSSProperties;
export { IRawFontStyle }
export { IRawStyle }
export { IStyle }
export { IStyleFunctionOrObject }

export declare type KeyFrames = IKeyframes;

/**
 * The `makeClasses` helper encapsulates `makeStyles`, and given a style map which follows
 * a specific naming convention, produces a hook function which takes in the component
 * draft state and auto distributes classes into the draft state. This removes a lot of
 * boilerplate code using `classnames` helpers to manage distributing classnames manually.
 *
 * Usage:
 *
 * ```tsx
 * const useButtonClasses makeClasses(theme => {
 *   root: { ... },
 *   _primary: { ... },
 *   _size_small: { ... }
 * });
 * ```
 *
 * The class naming convention is broken down as follows:
 *
 * * No underscores - a slot class name. (E.g. "root", "icon", etc)
 * * Prefixed with underscore - a modifier. (E.g. "_primary", "_fluid")
 * * Contains 2 underscores - a name/value matcher. (E.g. "_size_small")
 *
 * Modifier classnames are added to the root className when the state contains a truthy value
 * of the same name. For example, when the primary flag is present, the "_primary" modifier
 * class will be appended to the root className prop.
 *
 * Enum classnames are also added to the root className when teh state contains an enum value
 * which matches the value in the className. for example, when the `size` enum value is `small`,
 * the "_size_small" enum class will be appended to the root className prop.
 */
export declare const makeClasses: <TState extends {}>(styleOrFunction: Record<string, IStyle> | ((theme: Theme) => Record<string, IStyle>)) => (state: TState, options?: UseStylesOptions | undefined) => void;

/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 */
export declare function makeStyles<TStyleSet extends {
    [key: string]: IStyle;
}>(styleOrFunction: TStyleSet | ((theme: Theme) => TStyleSet)): (options?: UseStylesOptions) => {
    [key in keyof TStyleSet]: string;
};

/**
 * Hook factory for creating a `use*Variants` helper. Variants represent a configuration of
 * token values mapped to modifiers on the component. A variant can also be referenced using
 * a variant string. Variants can be overridden through the theme of the component.
 */
export declare const makeVariantClasses: <TState = {}, TVariants = Record<string, any>>(options: MakeVariantClassesOptions<TVariants>) => (state: TState, options?: import("./makeStyles").UseStylesOptions | undefined) => void;

/**
 * Options for makeVariantClasses.
 */
export declare type MakeVariantClassesOptions<TVariants = Variants> = {
    /**
     * Name of the component to use for fetching variants from the theme.
     */
    name?: string;
    /**
     * Prefix for css variables within the variants.
     */
    prefix?: string;
    /**
     * Styles for the component.
     */
    styles?: Record<string, IStyle> | ((theme: Theme) => Record<string, IStyle>);
    /**
     * Variants for the styles. A variant defines token values when a particular prop is present, or the
     * variant prop matches.
     */
    variants?: TVariants | ((theme: Theme) => TVariants);
};

export declare const MergeStylesProvider: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;

export declare const mergeStylesRenderer: StyleRenderer;
export { PartialTheme }

export declare interface StyleOptions<TProps> {
    slotProps: ((props: TProps) => Record<string, object>)[];
}

/**
 * Typing containing the definition for the `style` and `tokens` props that will be extended for the calculation of the
 * style prop.
 */
export declare interface StyleProps<TTokens extends ColorTokenSet = ColorTokenSet> {
    style?: React.CSSProperties;
    tokens?: TTokens;
}

export declare interface StyleRenderer {
    /**
     * Expected to initialize or re-initialize the renderer. Primarily for testing purposes.
     */
    reset: () => void;
    /**
     * Returns a unique id for the renderer; used as part of the cache key when determining if new
     * styles need to be rendered.
     */
    getId: () => number;
    /**
     * Renders a stylesheet and returns the map of key to class name.
     */
    renderStyles: <TRuleSet>(ruleSet: TRuleSet, options: StyleRendererOptions) => {
        [key in keyof TRuleSet]: string;
    };
    /**
     * Renders keyframes and returns the keyframe name.
     */
    renderKeyframes: (keyframes: KeyFrames, options: StyleRendererOptions) => string;
    /**
     * Renders fontfaces.
     */
    renderFontFace: (fontFace: FontFace, options: StyleRendererOptions) => void;
}

export declare const StyleRendererContext: React.Context<StyleRenderer>;

export declare type StyleRendererOptions = {
    rtl?: boolean;
    targetWindow: Window | undefined;
};
export { Theme }

export declare const ThemeContext: React.Context<Theme | undefined>;

/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
export declare const ThemeProvider: React.FunctionComponent<ThemeProviderProps>;

/**
 * {@docCategory ThemeProvider}
 * Props for the ThemeProvider component.
 */
export declare interface ThemeProviderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * A component that should be used as the root element of the ThemeProvider component.
     */
    as?: React.ElementType;
    /**
     * Optional ref to the root element.
     */
    ref?: React.Ref<HTMLElement>;
    /**
     * Defines the theme provided by the user.
     */
    theme?: PartialTheme | Theme;
    /**
     * Optional interface for registering dynamic styles. Defaults to using `merge-styles`. Use this
     * to opt into a particular rendering implementation, such as `emotion`, `styled-components`, or `jss`.
     * Note: performance will differ between all renders. Please measure your scenarios before using an alternative
     * implementation.
     */
    renderer?: StyleRenderer;
    /**
     * Defines where body-related theme is applied to.
     * Setting to 'element' will apply body styles to the root element of ThemeProvider.
     * Setting to 'body' will apply body styles to document body.
     * Setting to 'none' will not apply body styles to either element or body.
     *
     * @defaultvalue 'element'
     */
    applyTo?: 'element' | 'body' | 'none';
}

/**
 * State for the ThemeProvider component.
 */
export declare type ThemeProviderState = Omit<ThemeProviderProps, 'theme' | 'ref'> & {
    theme: Theme;
    ref: React.RefObject<HTMLElement>;
    customizerContext: ICustomizerContext;
};

export declare const tokensToStyleObject: (tokens?: React.CSSProperties | TokenSetType | undefined, prefix?: string | undefined, style?: React.CSSProperties | undefined) => React.CSSProperties;

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

export declare const useStyleRenderer: () => StyleRenderer;

/** Options that can be provided to the hook generated by `makeStyles`. */
export declare type UseStylesOptions = {
    theme?: Theme;
    renderer?: StyleRenderer;
};

/**
 * React hook for programmatically accessing the theme.
 */
export declare const useTheme: () => Theme;

/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
export declare const useThemeProvider: (props: ThemeProviderProps, ref: React.Ref<HTMLElement>, defaultProps: ThemeProviderProps) => {
    state: ThemeProviderState;
    render: (state: ThemeProviderState) => JSX.Element;
};

export declare function useThemeProviderClasses(state: ThemeProviderState): void;

export declare const useThemeProviderState: (draftState: ThemeProviderState) => void;

export declare const withThemeProvider: <TProps>(Component: React.FunctionComponent<TProps>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<TProps> & React.RefAttributes<HTMLButtonElement>>;

export { }

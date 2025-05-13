import { Variants, Theme } from '@fluentui/theme';
import { IStyle } from '@uifabric/merge-styles';
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
/**
 * Hook factory for creating a `use*Variants` helper. Variants represent a configuration of
 * token values mapped to modifiers on the component. A variant can also be referenced using
 * a variant string. Variants can be overridden through the theme of the component.
 */
export declare const makeVariantClasses: <TState = {}, TVariants = Record<string, any>>(options: MakeVariantClassesOptions<TVariants>) => (state: TState, options?: import("./makeStyles").UseStylesOptions | undefined) => void;

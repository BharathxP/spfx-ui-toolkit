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

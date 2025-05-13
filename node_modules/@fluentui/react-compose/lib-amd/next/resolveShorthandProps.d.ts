/**
 * Ensures that the given slots are represented using object syntax. This ensures that
 * the object can be merged along with other objects.
 * @param props - The incoming props
 * @param shorthandPropNames - An array of prop names to apply simplification to
 */
export declare const resolveShorthandProps: <TProps>(props: TProps, shorthandPropNames: (keyof TProps)[]) => TProps;

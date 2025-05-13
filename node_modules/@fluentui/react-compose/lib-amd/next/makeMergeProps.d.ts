export declare type MergePropsOptions = {
    /**
     * A list of props to deep merge. By default, `style` will
     * always be deep merged so it's not required to be provided.
     */
    deepMerge?: string[];
};
/**
 * Helper which deep clones props, but respectively assigns JSX, object refs, and class names
 * appropriately.
 *
 * @param target - the target object to merge onto.
 * @param propSets - one or more prop sets to deep merge onto the target.
 */
export declare const makeMergeProps: <TState = Record<string, any>>(options?: MergePropsOptions) => (target: Record<string, any>, ...propSets: (Record<string, any> | undefined)[]) => TState;

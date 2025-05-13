import * as React from 'react';
/**
 * The function that correctly handles passing refs.
 *
 * @param ref - An ref object or function
 * @param node - A node that should be passed by ref
 */
export declare const handleRef: <N>(ref: React.Ref<N> | undefined, node: N) => void;
/** Checks that the passed object is a valid React ref object. */
export declare const isRefObject: (ref: any) => ref is React.RefObject<any>;

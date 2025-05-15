import React from 'react';
export declare const RadioButtonGroup: ({ label, options, selectedKey, onChange, required, errorMessage, isPreview, hideLabel, resetOnDataSelected, resetCheckBoxList, }: {
    label?: string | undefined;
    options: any;
    selectedKey: any;
    onChange: any;
    required?: boolean | undefined;
    errorMessage?: string | undefined;
    isPreview?: boolean | undefined;
    hideLabel?: boolean | undefined;
    resetOnDataSelected?: boolean | undefined;
    resetCheckBoxList?: ((val: any[]) => void) | undefined;
}) => React.JSX.Element;

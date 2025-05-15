import React from 'react';
interface RadioButtonGroupProps {
    label: string;
    options: any;
    selectedKey: any;
    onChange: any;
    required: boolean;
    errorMessage: string;
    isPreview: boolean;
    hideLabel: boolean;
    resetOnDataSelected: boolean;
    Styles: any;
}
export declare const RadioButtonGroup: React.FC<RadioButtonGroupProps>;
export {};

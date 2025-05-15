import React from 'react';
interface DropDownSelectProps {
    label: string;
    options: any;
    selectedKey: any;
    placeholder: string;
    onChange: any;
    required: boolean;
    errorMessage: string;
    isPreview: boolean;
    disabled: boolean;
    hideLabel: boolean;
}
export declare const DropDownSelect: React.FC<DropDownSelectProps>;
export {};

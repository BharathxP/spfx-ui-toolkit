import React from 'react';
interface MultiCheckBoxInputProps {
    label: string;
    options: any;
    selectedKeys: any;
    onChange: any;
    required: boolean;
    errorMessage: string;
    isPreview: boolean;
    hideLabel: boolean;
    Styles: any;
    orientation: any;
}
export declare const MultiSelectCheckbox: React.FC<MultiCheckBoxInputProps>;
export {};

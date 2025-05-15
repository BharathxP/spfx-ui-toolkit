import React from 'react';
interface TextInputProps {
    label: string;
    value: any;
    multiline: boolean;
    onChange: any;
    length: number;
    isEmailCheck: boolean;
    alphaCheck: boolean;
    required: boolean;
    input: string;
    rows: number;
    isLink: boolean;
    errorMessage: string;
    isPreview: boolean;
    hideLabel: boolean;
    disabled: boolean;
    Styles: any;
    placeholder: string;
}
export declare const TextInput: React.FC<TextInputProps>;
export {};

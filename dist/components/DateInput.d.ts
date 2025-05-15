import React from 'react';
interface DateInputProps {
    label: string;
    value: any;
    onChange: any;
    placeholder: string;
    required: boolean;
    errorMessage: string;
    isPreview: boolean;
    hideLabel: boolean;
    Styles: any;
    disabled: boolean;
    minDate: any;
    maxDate: any;
}
export declare const DateInput: React.FC<DateInputProps>;
export {};

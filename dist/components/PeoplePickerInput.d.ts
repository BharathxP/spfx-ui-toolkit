import React from 'react';
interface PeoplePickerInputProps {
    context: any;
    label: string;
    selectedPeople: [];
    onChange: any;
    required: boolean;
    errorMessage: string;
    isPreview: boolean;
    hideLabel: boolean;
    maxSelections: number;
    disabled: boolean;
    Styles: any;
    placeholder: string;
}
export declare const PeoplePickerInput: React.FC<PeoplePickerInputProps>;
export {};

import React from 'react';
interface FormFieldConfig {
    id: string;
    type: 'Text' | 'Date' | 'PeoplePicker' | 'Checkbox' | 'Radio' | 'Dropdown';
    label: string;
    required?: boolean;
    placeholder?: string;
    options?: {
        key: string;
        text: string;
    }[];
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    errorMessage?: string;
    length?: number;
    alphaCheck?: boolean;
    hideLabel?: boolean;
    isEmailCheck?: boolean;
    input?: string;
    isPreview?: boolean;
    isLink?: boolean;
    Styles?: any;
    maxSelections?: number;
    minDate: any;
    maxDate: any;
    orientation: string;
    resetOnDataSelected: boolean;
}
interface DynamicFormProps {
    context: any;
    fields: FormFieldConfig[] | any;
    formData: {
        [key: string]: any;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        [key: string]: any;
    }>>;
    grid?: number;
}
export declare const DynamicForm: React.FC<DynamicFormProps>;
export {};

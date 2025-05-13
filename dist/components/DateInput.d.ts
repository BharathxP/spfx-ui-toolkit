import { IDatePickerStyles } from 'office-ui-fabric-react';
import React from 'react';
export declare const DateInput: ({ label, value, onChange, placeholder, required, errorMessage, isPreview, hideLabel, Styles, disabled, minDate, maxDate }: {
    label?: string | undefined;
    value: any;
    onChange: any;
    placeholder: any;
    required?: boolean | undefined;
    errorMessage?: string | undefined;
    isPreview?: boolean | undefined;
    hideLabel?: boolean | undefined;
    Styles?: Partial<IDatePickerStyles> | undefined;
    disabled?: boolean | undefined;
    minDate?: undefined;
    maxDate?: undefined;
}) => React.JSX.Element;

import React from 'react'
import { TextInput } from './TextInput'
import { DateInput } from './DateInput'
import { PeoplePickerInput } from './PeoplePickerInput'
import { MultiSelectCheckbox } from './MultiCheckBoxInput'
import { RadioButtonGroup } from './RadioButtonGroup'
import { DropDownSelect } from './DropDownSelect'

interface FormFieldConfig {
  id: string;
  type: "Text" | "Date" | "PeoplePicker" | "Checkbox" | "Radio" | "Dropdown";
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: { key: string; text: string }[];
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  errorMessage?: string;
  alphaCheck?: boolean;
  isEmailCheck?: boolean;
  isZipCodeCheck?: boolean;
  isPreview?: boolean;
  isLink?: boolean;
}

interface DynamicFormProps {
  fields: FormFieldConfig[]
  setFields: React.Dispatch<React.SetStateAction<FormFieldConfig[]>>;
  row?: number // number of columns per row
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ fields, setFields, row = 3 }) => {
  const gridTemplate = `repeat(${row}, 1fr)`

  const handleChange = (fieldId: string, newValue: any) => {
    setFields(prev =>
      prev.map(field =>
        field.id === fieldId ? { ...field, value: newValue } : field
      )
    );
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: gridTemplate,
        gap: '16px',
        alignItems: 'start'
      }}
    >
      {fields.map((field) => {
        switch (field.type) {
          case 'Text':
            return (
              <div key={field.id}>
                <TextInput
                  label={field.label}
                  required={field.required}
                  value={field.value}
                  placeholder={field.placeholder}
                  multiline={field.multiline}
                  rows={field.rows}
                  errorMessage={field.errorMessage}
                  alphaCheck={field.alphaCheck}
                  isEmailCheck={field.isEmailCheck}
                  isZipCodeCheck={field.isZipCodeCheck}
                  isPreview={field.isPreview}
                  disabled={field.disabled}
                  onChange={(val) => handleChange(field.id, val)}
                />
              </div>
            )

          case 'Date':
            return (
              <div key={field.id}>
                <DateInput
                  label={field.label}
                  value={field.value}
                  required={field.required}
                  onChange={(val) => handleChange(field.id, val)}
                  disabled={field.disabled}
                  placeholder={''}
                />
              </div>
            )

          case 'PeoplePicker':
            return (
              <div key={field.id}>
                <PeoplePickerInput
                  label={field.label}
                  required={field.required}
                  selectedPeople={field.value}
                  onChange={(val) => handleChange(field.id, val)}
                  disabled={field.disabled}
                  context={undefined}
                />
              </div>
            )

          case 'Checkbox':
            return (
              <div key={field.id}>
                <MultiSelectCheckbox
                  label={field.label}
                  options={field.options || []}
                  selectedKeys={field.value}
                  onChange={(val) => handleChange(field.id, val)}
                />
              </div>
            )

          case 'Radio':
            return (
              <div key={field.id}>
                <RadioButtonGroup
                  label={field.label}
                  options={field.options || []}
                  selectedKey={field.value}
                  onChange={(val) => handleChange(field.id, val)}
                />
              </div>
            )

          case 'Dropdown':
            return (
              <div key={field.id}>
                <DropDownSelect
                  label={field.label}
                  options={field.options || []}
                  selectedKey={field.value}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={field.disabled}
                  onChange={(val) => handleChange(field.id, val)}
                />
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}

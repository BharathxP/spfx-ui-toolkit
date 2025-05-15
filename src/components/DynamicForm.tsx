import React from 'react'
import { TextInput } from './TextInput'
import { DateInput } from './DateInput'
import { PeoplePickerInput } from './PeoplePickerInput'
import { MultiSelectCheckbox } from './MultiCheckBoxInput'
import { RadioButtonGroup } from './RadioButtonGroup'
import { DropDownSelect } from './DropDownSelect'

interface FormFieldConfig {
  id: string
  type: 'Text' | 'Date' | 'PeoplePicker' | 'Checkbox' | 'Radio' | 'Dropdown'
  label: string
  required?: boolean
  placeholder?: string
  options?: { key: string; text: string }[]
  disabled?: boolean
  multiline?: boolean
  rows?: number
  errorMessage?: string
  length?: number
  alphaCheck?: boolean
  hideLabel?: boolean
  isEmailCheck?: boolean
  input?: string
  isPreview?: boolean
  isLink?: boolean
  Styles?: any
  maxSelections?: number
  minDate: any
  maxDate: any
  orientation: string
  resetOnDataSelected: boolean
}

interface DynamicFormProps {
  context: any
  fields: FormFieldConfig[] | any
  formData: { [key: string]: any }
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  grid?: number // number of columns per row
}

export const DynamicForm: React.FC<DynamicFormProps> = ({
  context,
  fields = [],
  formData,
  setFormData,
  grid = 3
}) => {
  const gridTemplate = `repeat(${grid}, 1fr)`

  const handleChange = (fieldId: string, newValue: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: newValue
    }))
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: gridTemplate,
        gap: '16px',
        alignItems: 'start'
      }}
    >
      {fields.map((field: any) => {
        const value = formData[field.id] ?? ''
        switch (field.type) {
          case 'Text':
            return (
              <div key={field.id}>
                <TextInput
                  label={field.label}
                  required={field.required}
                  value={value}
                  length={field.length}
                  Styles={field.Styles}
                  input={field.input}
                  hideLabel={field.hideLabel}
                  placeholder={field.placeholder}
                  multiline={field.multiline}
                  rows={field.rows}
                  errorMessage={field.errorMessage}
                  alphaCheck={field.alphaCheck}
                  isEmailCheck={field.isEmailCheck}
                  isPreview={field.isPreview}
                  disabled={field.disabled}
                  onChange={(val) => handleChange(field.id, val)}
                  isLink={field.isLink}
                />
              </div>
            )

          case 'Date':
            return (
              <div key={field.id}>
                <DateInput
                  label={field.label}
                  value={value}
                  required={field.required}
                  onChange={(val) => handleChange(field.id, val)}
                  disabled={field.disabled}
                  placeholder={field.placeholder}
                  errorMessage={field.errorMessage}
                  isPreview={field.isPreview}
                  hideLabel={field.hideLabel}
                  Styles={field.Styles}
                  minDate={field.minDate}
                  maxDate={field.maxDate}
                />
              </div>
            )

          case 'PeoplePicker':
            return (
              <div key={field.id}>
                <PeoplePickerInput
                  label={field.label}
                  required={field.required}
                  selectedPeople={value || []}
                  onChange={(val) => handleChange(field.id, val)}
                  disabled={field.disabled}
                  maxSelections={field.maxSelections}
                  context={context}
                  errorMessage={field.errorMessage}
                  isPreview={field.isPreview}
                  hideLabel={field.hideLabel}
                  Styles={field.Styles}
                  placeholder={field.placeholder}
                />
              </div>
            )

          case 'Checkbox':
            return (
              <div key={field.id}>
                <MultiSelectCheckbox
                  label={field.label}
                  options={field.options || []}
                  selectedKeys={value}
                  onChange={(val) => handleChange(field.id, val)}
                  errorMessage={field.errorMessage}
                  isPreview={field.isPreview}
                  hideLabel={field.hideLabel}
                  Styles={field.Styles}
                  orientation={field.orientation}
                  required={field.required}
                />
              </div>
            )

          case 'Radio':
            return (
              <div key={field.id}>
                <RadioButtonGroup
                  label={field.label}
                  options={field.options || []}
                  selectedKey={value}
                  onChange={(val) => handleChange(field.id, val)}
                  errorMessage={field.errorMessage}
                  isPreview={field.isPreview}
                  hideLabel={field.hideLabel}
                  Styles={field.Styles}
                  required={false}
                  resetOnDataSelected={field.resetOnDataSelected}
                />
              </div>
            )

          case 'Dropdown':
            return (
              <div key={field.id}>
                <DropDownSelect
                  label={field.label}
                  options={field.options || []}
                  selectedKey={value}
                  placeholder={field.placeholder}
                  required={field.required}
                  disabled={field.disabled}
                  onChange={(val) => handleChange(field.id, val)}
                  errorMessage={field.errorMessage}
                  isPreview={field.isPreview}
                  hideLabel={field.hideLabel}
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

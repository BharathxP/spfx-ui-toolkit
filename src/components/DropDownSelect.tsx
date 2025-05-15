// Dropdown Component
import { Label, Icon, Dropdown } from 'office-ui-fabric-react'
import React from 'react'

interface DropDownSelectProps {
  label: string
  options: any
  selectedKey: any
  placeholder: string
  onChange: any
  required: boolean
  errorMessage: string
  isPreview: boolean
  disabled: boolean
  hideLabel: boolean
}

export const DropDownSelect: React.FC<DropDownSelectProps> = ({
  label,
  options,
  selectedKey,
  placeholder = '',
  onChange,
  required,
  errorMessage = '',
  isPreview = false,
  disabled = false,
  hideLabel = false
}) => {
  const [error, setError] = React.useState(errorMessage)
  const [showError, setShowError] = React.useState(!!errorMessage)

  const handleChange = (option) => {
    if (!option) {
      setError('Selection is required.')
      setShowError(true)
    } else {
      setError('')
      setShowError(false)
      onChange(option.key)
    }
  }

  React.useEffect(() => {
    if (errorMessage) {
      setError(errorMessage)
      setShowError(true)
    }
  }, [errorMessage])

  return (
    <div>
      {!hideLabel ? (
        <Label
          style={{ fontSize: '13px', color: '#475055' }}
          required={required}
        >
          {label}
        </Label>
      ) : null}
      {isPreview ? (
        <span>{selectedKey}</span>
      ) : (
        <React.Fragment>
          <Dropdown
            selectedKey={selectedKey}
            onChange={(_event, option) => handleChange(option)}
            placeholder={placeholder}
            options={options}
            className='ToolKitDropDown'
            disabled={disabled}
          />
          {showError && (
            <div
              style={{
                color: '#a4262c',
                fontSize: '12px',
                display: 'flex',
                gap: '5px',
                margin: '2px 0px 0px 0px'
              }}
            >
              <Icon style={{ marginTop: '2px' }} iconName='IncidentTriangle' />
              <span>{error}</span>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  )
}

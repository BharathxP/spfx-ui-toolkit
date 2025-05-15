import { Label, Icon, ICheckboxStyles, Checkbox } from 'office-ui-fabric-react'
import React from 'react'

const checkboxStyles: ICheckboxStyles = {
  text: {
    marginRight: '15px',
    fontWeight: 400,
    color: '#010E3A',
    fontSize: '13px'
  },
  checkmark: {
    color: '#fff',
    backgroundColor: '#3258D2',
    padding: '3px',
    width: '20px',
    selectors: {
      ':checked:hover': {
        backgroundColor: '#3258D2', // Keeps color consistent when checked and hovered
        borderColor: '#4D5675'
      }
    }
  },
  checkbox: {
    color: '#3258D2',
    backgroundColor: '#fff',
    border: '1px solid #4D5675 !important',
    width: '17px',
    height: '17px'
  }
}

// MultiSelectCheckbox Component
interface MultiCheckBoxInputProps {
  label: string
  options: any
  selectedKeys: any
  onChange: any
  required: boolean
  errorMessage: string
  isPreview: boolean
  hideLabel: boolean
  Styles: any
  orientation: any
}
export const MultiSelectCheckbox: React.FC<MultiCheckBoxInputProps> = ({
  label = '',
  options,
  selectedKeys,
  onChange,
  required = true,
  errorMessage = '',
  isPreview = false,
  hideLabel = false,
  Styles = checkboxStyles,
  orientation = 'horizontal'
}) => {
  const [error, setError] = React.useState(errorMessage)
  const [showError, setShowError] = React.useState(!!errorMessage)

  const handleChange = (option) => {
    let updatedKeys

    if (option.key === 'Not Applicable') {
      // If 'Not Applicable' is selected, make it the only selected option
      if (selectedKeys?.includes(option.key)) {
        updatedKeys = [] // Unselect 'Not Applicable' if it's already selected
      } else {
        updatedKeys = ['Not Applicable'] // Select 'Not Applicable' and uncheck others
      }
    } else {
      // If another option is selected, uncheck 'Not Applicable'
      if (selectedKeys?.includes('Not Applicable')) {
        updatedKeys = selectedKeys.filter((key) => key !== 'Not Applicable')
      } else {
        updatedKeys = selectedKeys ? [...selectedKeys] : []
      }

      if (updatedKeys.includes(option.key)) {
        // Uncheck the current option if it's already selected
        updatedKeys = updatedKeys.filter((key) => key !== option.key)
      } else {
        // Add the current option to the selection
        updatedKeys.push(option.key)
      }
    }

    onChange(updatedKeys)

    // Validate at least one option is selected
    if (required && updatedKeys.length === 0) {
      setError('At least one option must be selected.')
      setShowError(true)
    } else {
      setError('')
      setShowError(false)
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
        <span>{selectedKeys?.join(', ')}</span>
      ) : (
        <React.Fragment>
          <div
            style={
              orientation == 'horizontal'
                ? { display: 'inline-flex', marginTop: '5px' }
                : {}
            }
          >
            {options.map((option) => (
              <div style={{ marginRight: '10px' }}>
                <Checkbox
                  key={option.key}
                  label={option.text}
                  styles={Styles}
                  checked={selectedKeys?.includes(option.key)}
                  onChange={() => handleChange(option)}
                />
              </div>
            ))}
          </div>
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

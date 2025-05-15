import {
  Label,
  Icon,
  ChoiceGroup,
  IChoiceGroupStyles
} from 'office-ui-fabric-react'
import React from 'react'
const choiceGroupStyles: IChoiceGroupStyles = {
  root: {
    '.ms-ChoiceField': {
      padding: '0px 15px 0px 0px'
    },
    flex: '0 1 25%',
    'label::after': {
      borderColor: '#3258D2 !important'
    },
    'label:hover::after': {
      color: '#3258D2 !important',
      borderColor: '#3258D2 !important'
    },
    'label::before': {
      color: '#3258D2 !important',
      borderColor: '#3258D2 !important'
    },
    'label:hover::before': {
      color: '#3258D2 !important',
      borderColor: '#3258D2 !important'
    }
  },
  label: {
    fontSize: '13px !important',
    color: '#475055 !important'
  },
  flexContainer: {
    display: 'inline-flex',
    margin: '-7px 0px 0px 0px'
  }
}
// RadioButton Component

interface RadioButtonGroupProps {
  label: string
  options: any
  selectedKey: any
  onChange: any
  required: boolean
  errorMessage: string
  isPreview: boolean
  hideLabel: boolean
  resetOnDataSelected: boolean
  Styles: any
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label = '',
  options,
  selectedKey,
  onChange,
  required = true,
  errorMessage = '',
  isPreview = false,
  hideLabel = false,
  resetOnDataSelected = false,
  Styles = choiceGroupStyles
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
      if (resetOnDataSelected && option.key == 'No Data Collected') {
        onChange(option.key)
      } else {
        onChange(option.key)
      }
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
          <ChoiceGroup
            selectedKey={selectedKey}
            options={options}
            styles={Styles}
            onChange={(_event, option) => handleChange(option)}
            required={required}
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

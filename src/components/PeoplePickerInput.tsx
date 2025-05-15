import React, { useState } from 'react'
import { Label, Icon, IBasePickerStyles } from 'office-ui-fabric-react'
import {
  PeoplePicker,
  PrincipalType
} from '@pnp/spfx-controls-react/lib/PeoplePicker'

const peoplePickerStyles: Partial<IBasePickerStyles> = {
  text: {
    borderRadius: '4px !important',
    border: '1px solid #CBD1D7',
    '&::after': {
      border: '1px solid #CBD1D7'
      //   borderRadius: "4px !important",
    },
    '&::focus-visible': {
      outline: 'none !important'
    }
  },
  input: {
    height: '27px'
  },
  root: {
    border: '1px solid #CBD1D7 !important',
    borderRadius: '4px',
    width: 'auto'
  }
}

interface PeoplePickerInputProps {
  context: any
  label: string
  selectedPeople: []
  onChange: any
  required: boolean
  errorMessage: string
  isPreview: boolean
  hideLabel: boolean
  maxSelections: number
  disabled: boolean
  Styles: any
  placeholder: string
}

// PeoplePicker Component
export const PeoplePickerInput: React.FC<PeoplePickerInputProps> = ({
  label = '',
  selectedPeople = [],
  onChange,
  required = true,
  errorMessage = '',
  isPreview = false,
  hideLabel = false,
  maxSelections = 1,
  disabled = false,
  Styles = peoplePickerStyles,
  placeholder = 'Enter Name/Email here',
  context
}) => {
  const [error, setError] = useState(errorMessage)
  const [showError, setShowError] = useState(!!errorMessage)

  const handlePeopleChange = (items) => {
    if (items.length > maxSelections) {
      setError(`You can only select up to ${maxSelections} people.`)
      setShowError(true)
      return
    } else if (items.length === 0 && required) {
      setError('At least one person must be selected.')
      setShowError(true)
    } else {
      setError('')
      setShowError(false)
    }
    setTimeout(() => {
      setError('')
      setShowError(false)
    }, 1000)
    onChange(items)
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
        <div>
          {selectedPeople.length > 0 ? (
            selectedPeople.map((person: any) => (
              <span key={person.key}>
                {person.text || person.displayName || person?.Title}
              </span>
            ))
          ) : (
            <span></span>
          )}
        </div>
      ) : (
        <React.Fragment>
          <PeoplePicker
            context={context}
            placeholder={placeholder}
            ensureUser={true}
            personSelectionLimit={maxSelections}
            required={required}
            onChange={handlePeopleChange}
            defaultSelectedUsers={selectedPeople?.map(
              (e: any) => e?.secondaryText || e?.email || e?.EMail
            )}
            showtooltip={false}
            disabled={disabled}
            resolveDelay={1000}
            styles={Styles}
            principalTypes={[PrincipalType.User]}
          ></PeoplePicker>
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

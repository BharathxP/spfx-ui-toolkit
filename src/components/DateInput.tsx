// Date Component
import {
  Label,
  Icon,
  IDatePickerStyles,
  DatePicker
} from 'office-ui-fabric-react'
import React from 'react'
import { globalDateFormat } from '../constants/contants'
import moment from 'moment'
import { FormatDate } from '../constants/FormatDate'
const datePickerStyle: Partial<IDatePickerStyles> = {
  root: {
    margin: '0px 0px 5px 0px'
  },
  icon: {
    pointerEvents: 'none'
  },
  textField: {
    '& .ms-TextField-fieldGroup': {
      border: '2px solid #CBD1D7 !important',
      borderRadius: 'none',
      borderColor: 'none',
      '::after': {
        borderColor: 'none'
      },
      ':hover': {
        borderColor: 'none'
      }
    }
  }
}

export const DateInput = ({
  label = '',
  value,
  onChange,
  placeholder,
  required = true,
  errorMessage = '',
  isPreview = false,
  hideLabel = false,
  Styles = datePickerStyle,
  disabled = false,
  minDate = undefined,
  maxDate = undefined
}) => {
  const [error, setError] = React.useState(errorMessage)
  const [showError, setShowError] = React.useState(!!errorMessage)

  const handleDateChange = (date) => {
    if (!date) {
      setError('Date is required.')
      setShowError(true)
    } else {
      setError('')
      setShowError(false)
      onChange(date)
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
        <span>{value ? moment(value).format(globalDateFormat) : ''}</span>
      ) : (
        <React.Fragment>
          <DatePicker
            styles={Styles}
            formatDate={FormatDate}
            placeholder={placeholder}
            value={value ? new Date(value) : undefined}
            disabled={disabled}
            onSelectDate={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
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

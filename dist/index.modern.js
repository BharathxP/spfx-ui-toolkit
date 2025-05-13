import React, { useState } from 'react';
import { Label, TextField, Icon, DatePicker } from 'office-ui-fabric-react';
import moment from 'moment';

var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var zipRegex = /^\d{5}(-\d{4})?$/;
var alphanumericRegex = /^[a-zA-Z0-9\s,.!?()@&#*_ -:']+$/i;
var globalDateFormat = 'MM/DD/YYYY';

var textFieldStyles = {
  root: {
    "& .ms-TextField-fieldGroup": {
      border: "2px solid #CBD1D7 !important",
      borderRadius: "4px",
      borderColor: "transparent",
      "::after": {
        borderColor: "transparent"
      },
      ":hover": {
        borderColor: "transparent"
      }
    }
  }
};
var TextInput = function TextInput(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? "" : _ref$label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$multiline = _ref.multiline,
    multiline = _ref$multiline === void 0 ? false : _ref$multiline,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? "" : _ref$errorMessage,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 200 : _ref$length,
    _ref$alphaCheck = _ref.alphaCheck,
    alphaCheck = _ref$alphaCheck === void 0 ? false : _ref$alphaCheck,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$isPreview = _ref.isPreview,
    isPreview = _ref$isPreview === void 0 ? false : _ref$isPreview,
    _ref$isEmailCheck = _ref.isEmailCheck,
    isEmailCheck = _ref$isEmailCheck === void 0 ? false : _ref$isEmailCheck,
    _ref$isZipCodeCheck = _ref.isZipCodeCheck,
    isZipCodeCheck = _ref$isZipCodeCheck === void 0 ? false : _ref$isZipCodeCheck,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 1 : _ref$rows,
    _ref$Styles = _ref.Styles,
    Styles = _ref$Styles === void 0 ? textFieldStyles : _ref$Styles,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$isLink = _ref.isLink,
    isLink = _ref$isLink === void 0 ? false : _ref$isLink;
  var _useState = useState(errorMessage),
    error = _useState[0],
    setError = _useState[1];
  var _useState2 = useState(!!errorMessage),
    showError = _useState2[0],
    setShowError = _useState2[1];
  var handleChange = function handleChange(_, newValue) {
    if ((newValue === null || newValue === void 0 ? void 0 : newValue.length) > length) {
      setError("This field must be no more than " + length + " characters.");
      setShowError(true);
    } else if (alphaCheck) {
      if (newValue && !alphanumericRegex.test(newValue)) {
        setError("This field must be alphanumeric");
        setShowError(true);
        setTimeout(function () {
          setError("");
          setShowError(false);
        }, 2000);
      } else {
        setError("");
        setShowError(false);
        onChange(newValue);
      }
    } else {
      setError("");
      setShowError(false);
      onChange(newValue);
    }
  };
  React.useEffect(function () {
    if (value) {
      if (!emailRegex.test(value) && isEmailCheck) {
        setError("Email is in invalid format");
      } else if (!zipRegex.test(value) && isZipCodeCheck) {
        setError("Invalid Zip Code");
      } else {
        errorMessage = "";
        setError("");
      }
    } else {
      setError(errorMessage);
    }
  }, [value]);
  React.useEffect(function () {
    if (errorMessage) {
      setError(errorMessage);
      setShowError(true);
    }
  }, [errorMessage]);
  return React.createElement("div", null, !hideLabel ? React.createElement(Label, {
    style: {
      fontSize: '13px',
      color: '#475055'
    },
    required: required
  }, label) : null, isPreview ? React.createElement(React.Fragment, null, multiline ? React.createElement(React.Fragment, null, React.createElement("span", null, (value === null || value === void 0 ? void 0 : value.replaceAll(decodeURIComponent("%0A"), "<br>")) || "")) : React.createElement("span", null, isLink ? React.createElement("a", {
    href: value !== null && value !== void 0 && value.startsWith('http://') || value !== null && value !== void 0 && value.startsWith('https://') ? value : "https://" + value,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#0078d4'
    }
  }, value) : value)) : React.createElement(React.Fragment, null, React.createElement(TextField, {
    value: value,
    placeholder: placeholder,
    styles: Styles,
    validateOnLoad: false,
    onChange: handleChange,
    style: {
      border: "none !important"
    },
    disabled: disabled,
    multiline: multiline,
    type: type,
    rows: rows
  }), (showError || error) && React.createElement("div", {
    style: {
      color: '#a4262c',
      fontSize: '12px',
      display: 'flex',
      gap: '5px',
      margin: '2px 0px 0px 0px'
    }
  }, React.createElement(Icon, {
    style: {
      marginTop: '2px'
    },
    iconName: "IncidentTriangle"
  }), React.createElement("span", null, error || errorMessage))));
};

var Button = function Button() {
  var _useState = useState('green'),
    color = _useState[0],
    setColor = _useState[1];
  var changeColor = function changeColor() {
    setColor(color === 'green' ? 'black' : 'green');
  };
  return React.createElement("button", {
    style: {
      backgroundColor: color
    },
    onClick: changeColor
  }, "Click me");
};

function FormatDate(Date) {
  return !Date ? "" : Date.getMonth() + 1 + "/" + Date.getDate() + "/" + Date.getFullYear();
}

var datePickerStyle = {
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
};
var DateInput = function DateInput(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    value = _ref.value,
    onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? '' : _ref$errorMessage,
    _ref$isPreview = _ref.isPreview,
    isPreview = _ref$isPreview === void 0 ? false : _ref$isPreview,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$Styles = _ref.Styles,
    Styles = _ref$Styles === void 0 ? datePickerStyle : _ref$Styles,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$minDate = _ref.minDate,
    minDate = _ref$minDate === void 0 ? undefined : _ref$minDate,
    _ref$maxDate = _ref.maxDate,
    maxDate = _ref$maxDate === void 0 ? undefined : _ref$maxDate;
  var _React$useState = React.useState(errorMessage),
    error = _React$useState[0],
    setError = _React$useState[1];
  var _React$useState2 = React.useState(!!errorMessage),
    showError = _React$useState2[0],
    setShowError = _React$useState2[1];
  var handleDateChange = function handleDateChange(date) {
    if (!date) {
      setError('Date is required.');
      setShowError(true);
    } else {
      setError('');
      setShowError(false);
      onChange(date);
    }
  };
  React.useEffect(function () {
    if (errorMessage) {
      setError(errorMessage);
      setShowError(true);
    }
  }, [errorMessage]);
  return React.createElement("div", null, !hideLabel ? React.createElement(Label, {
    style: {
      fontSize: '13px',
      color: '#475055'
    },
    required: required
  }, label) : null, isPreview ? React.createElement("span", null, value ? moment(value).format(globalDateFormat) : '') : React.createElement(React.Fragment, null, React.createElement(DatePicker, {
    styles: Styles,
    formatDate: FormatDate,
    placeholder: placeholder,
    value: value ? new Date(value) : undefined,
    disabled: disabled,
    onSelectDate: handleDateChange,
    minDate: minDate,
    maxDate: maxDate
  }), showError && React.createElement("div", {
    style: {
      color: '#a4262c',
      fontSize: '12px',
      display: 'flex',
      gap: '5px',
      margin: '2px 0px 0px 0px'
    }
  }, React.createElement(Icon, {
    style: {
      marginTop: '2px'
    },
    iconName: 'IncidentTriangle'
  }), React.createElement("span", null, error))));
};

export { Button, DateInput, TextInput };
//# sourceMappingURL=index.modern.js.map

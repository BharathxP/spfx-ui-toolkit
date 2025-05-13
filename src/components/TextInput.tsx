import React, { useState } from "react";
import {
  TextField,
  Label,
  Icon,
  ITextFieldStyles,
} from "office-ui-fabric-react";
import { alphanumericRegex, emailRegex, zipRegex } from "../constants/contants";

const textFieldStyles: Partial<ITextFieldStyles> = {
    root: {
      "& .ms-TextField-fieldGroup": {
        border: "2px solid #CBD1D7 !important",
        borderRadius: "4px",
        borderColor: "transparent",
        "::after": {
          borderColor: "transparent",
        },
        ":hover": {
          borderColor: "transparent",
        },
      },
    },
  };

export const TextInput = ({
  label = "",
  value ="",
  onChange,
  placeholder="",
  required = true,
  multiline = false,
  errorMessage = "",
  length = 200,
  alphaCheck = false,
  hideLabel = false,
  isPreview = false,
  isEmailCheck = false,
  isZipCodeCheck = false,
  type = "text",
  rows = 1,
  Styles = textFieldStyles,
  disabled = false,
  isLink= false
}) => {
  const [error, setError] = useState(errorMessage);
  const [showError, setShowError] = useState(!!errorMessage);

  const handleChange = (_: any, newValue: string) => {
    if (newValue?.length > length) {
      setError(`This field must be no more than ${length} characters.`);
      setShowError(true);
    } else if (alphaCheck) {
      if (newValue && !alphanumericRegex.test(newValue)) {
        setError(`This field must be alphanumeric`);
        setShowError(true);
        setTimeout(() => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (errorMessage) {
      setError(errorMessage);
      setShowError(true);
    }
  }, [errorMessage]);

  return (
    <div>
      {!hideLabel ? (
        <Label style={{fontSize:'13px', color:'#475055'}} required={required}>
          {label}
        </Label>
      ) : null}
      {isPreview ? (
        <React.Fragment>
          {multiline ? (
            <React.Fragment>
              <span>
                {value?.replaceAll(decodeURIComponent("%0A"), "<br>") || ""}
              </span>
            </React.Fragment>
          ) : (
           <span>
           {isLink ? (
             <a
               href={value?.startsWith('http://') || value?.startsWith('https://') ? value : `https://${value}`} // Assuming 'value' is a URL
               target="_blank"
               rel="noopener noreferrer" // This is recommended for security when using target="_blank"
               style={{cursor:'pointer', textDecoration:'underline', color:'#0078d4'}}
             >
               {value}
             </a>
           ) : (
             value
           )}
         </span>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <TextField
            value={value}
            placeholder={placeholder}
            styles={Styles}
            validateOnLoad={false}
            onChange={handleChange}
            style={{
              border: "none !important",
            }}
            disabled={disabled}
            multiline={multiline}
            type={type}
            rows={rows}
          />
          {(showError || error) && (
            <div style={{color:'#a4262c', fontSize:'12px', display:'flex', gap:'5px', margin:'2px 0px 0px 0px'}}>
              <Icon style={{marginTop:'2px'}} iconName="IncidentTriangle" />
              <span>{error || errorMessage}</span>
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

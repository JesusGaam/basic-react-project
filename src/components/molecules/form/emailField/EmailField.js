import React, { useEffect } from "react";
import { getRandomNumber, isEmail } from "../../../../utils/Utilities";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import "./EmailField.scss";

const EmailField = ({ options, handleValue = (_value, _init) => {} }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = "",
    value = "",
    placeholder = "",
    helper,
    defaultHelper,
  } = options;

  useEffect(() => {
    if (value.length > 0) {
      handleValue(value, true);
    }
  }, []);

  return (
    <div className={`form-element email ${disabled ? "disabled" : ""}`}>
      <Label
        options={{
          id,
          required,
          label,
        }}
      />
      <div className="input">
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onInput={(e) => handleValue(e.target.value)}
          autoComplete="off"
        />
      </div>
      <HelperText
        options={{
          error,
          helperText: helper || defaultHelper,
        }}
      />
    </div>
  );
};

export default EmailField;

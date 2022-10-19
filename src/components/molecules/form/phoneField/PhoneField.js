import React, { useEffect } from "react";
import { getRandomNumber } from "../../../../utils/Utilities";
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import "./PhoneField.scss";

const PhoneField = ({ options, handleValue = (_value, _init) => {} }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = "",
    value = "",
    placeholder = "",
    helper,
    defaultHelper = "Ingresa número a 10 dígitos",
  } = options;
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  useEffect(() => {
    if (value.length > 0) {
      handleValue(value, true);
    }
  }, []);


  const validationFormat = (e) => {
    let index = numbers.indexOf(e.key);

    if (e.key.length > 1) {
      return;
    } else if (index == -1) {
      e.preventDefault();
    }
  };

  return (
    <div className={`form-element phone ${disabled ? "disabled" : ""}`}>
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
          onInput={(e) =>
            handleValue(e.target.value)
          }
          onKeyDown={validationFormat}
          autoComplete="off"
          maxLength={10}
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

export default PhoneField;

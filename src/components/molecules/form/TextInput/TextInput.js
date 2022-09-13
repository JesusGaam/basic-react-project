import React, { useEffect } from "react";
import { getRandomNumber } from '../../../../utils/Utilities'
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import './style.scss'

const TextInput = ({ options }) => {
  const {
    id = getRandomNumber(10000, 1000000),
    error = false,
    required = false,
    disabled = false,
    label = '',
    defaultValue = '',
    placeholder = '',
    helper,
    defaultHelper,
    emit = () => { }
  } = options;

  useEffect(() => {
    if (defaultValue.length > 0) {
      emit(defaultValue);
    }
  }, [])

  return (
    <div
      className={`form-element text ${disabled ? 'disabled' : ''}`}
    >
      <Label
        options={{
          id,
          required,
          label
        }}
      />
      <div className="input">
        <input
          id={id}
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          onInput={(e) => emit(e.target.value, validationEvent(e.target.value, required))}
          autoComplete="off"
        />
      </div>
      <HelperText
        options={{
          error,
          helperText: helper || defaultHelper
        }}
      />
    </div>
  );
}

const validationEvent = (value, required) => {
  var error = required && value.length == 0;

  return {
    error,
    message: error ? "Este campo es obligatorio" : ""
  }
}

export default TextInput;

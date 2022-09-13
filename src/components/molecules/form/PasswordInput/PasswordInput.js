import React, { useEffect } from "react";
import { getRandomNumber, isEmail } from '../../../../utils/Utilities'
import Label from "../label/Label";
import HelperText from "../helperText/HelperText";
import './style.scss'

const PasswordInput = ({ options }) => {
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
      className={`form-element password ${disabled ? 'disabled' : ''}`}
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
          type="password"
          defaultValue={defaultValue}
          placeholder={placeholder}
          // onInput={(e) => emit(e.target.value)}
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
  let error = true;
  let message = "";


  if (required && value.length == 0) {
    message = "Este campo es obligatorio";
  } else
    if (!isEmail(value)) {
      message = "El correo electrónico es incorrecto";
    } else {
      error = false;
    }
  return { error, message }
}

export default PasswordInput;

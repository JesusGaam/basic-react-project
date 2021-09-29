import React, { useEffect } from "react";
import styled, { } from 'styled-components';
import { getRandomNumber, isEmail } from '../../../utils/Utilities'
import Label from "./Label";
import HelperText from "./HelperText";

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
    <Wrapper
      className={`form-element ${disabled ? 'disabled' : ''}`}
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
          onInput={(e) => emit(e.target.value)}
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
    </Wrapper>
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

const Wrapper = styled.div`
  &.disabled{ 
  }
  input[type=password]{
  }
`;

export default PasswordInput;

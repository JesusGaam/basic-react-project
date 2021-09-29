import React, { useEffect } from "react";
import styled, { } from 'styled-components';
import { getRandomNumber } from '../../../utils/Utilities'
import Label from "./Label";
import HelperText from "./HelperText";

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
    </Wrapper>
  );
}

const validationEvent = (value, required) => {
  var error = required && value.length == 0;

  return {
    error,
    message: error ? "Este campo es obligatorio" : ""
  }
}

const Wrapper = styled.div`
  &.disabled{
    
  }
`;

export default TextInput;

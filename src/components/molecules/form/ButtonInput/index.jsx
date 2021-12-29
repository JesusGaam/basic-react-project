import React from "react";
import './style.scss'

const ButtonInput = ({ options, className }) => {
  const {
    mode = "primary",
    disabled = false,
    defaultValue = '',
    emit = () => { console.log("clicked button"); }
  } = options;

  return (
    <input
      className={`form-element button ${mode} ${className} ${disabled ? 'disabled' : ''}`}
      type="button"
      value={defaultValue}
      onClick={(e) => emit(e.target.value)}
    />
  );
}

export default ButtonInput;

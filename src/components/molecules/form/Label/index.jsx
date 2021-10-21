import React from "react";
import './style.scss'

const Label = ({ options }) => {
  const {
    id,
    required = false,
    label = '',
  } = options;

  return (
    <>
      {
        label.length > 0 &&
        <label
          htmlFor={id}
        >
          {label} {required && <span className="required">*</span>}
        </label>
      }
    </>
  );
}

export default Label;

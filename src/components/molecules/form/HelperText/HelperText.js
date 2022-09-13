import React, { } from "react";
import './style.scss'

const HelperText = ({ options }) => {
  const {
    error = false,
    helperText = '',
  } = options;

  return (
    <>
      {
        helperText &&
        <div
          className={`helper-text ${error ? 'error' : ''}`}
        >
          {helperText}
        </div>
      }
    </>
  );
}

export default HelperText;

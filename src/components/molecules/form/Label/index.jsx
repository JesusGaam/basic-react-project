import React from "react";
import { getRandomNumber } from '@/utils/Utilities'
import './style.scss'

const Label = ({ options }) => {
  const {
    id = getRandomNumber(10000, 1000000),
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

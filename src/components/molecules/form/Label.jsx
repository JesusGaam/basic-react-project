import React, { } from "react";
import styled, { } from 'styled-components';

const Label = ({ options }) => {
  const {
    id,
    required = false,
    label = '',
  } = options;

  return (
    <>
      {
        label.length>0 &&
        <LabelTag htmlFor={id}>
          {label} {required && <span className="required">*</span>}
        </LabelTag>
      }
    </>
  );
}
const LabelTag = styled.label`
    display:block;
    margin-bottom: 4px;
    padding-left: ${({ theme }) => theme.horizontalPaddingInput}px;
    font-size: ${({ theme }) => theme.sizeText - 2}px;

    .required {
     color: ${({ theme }) => theme.colorDanger};
     font-weight: bold;
    }
`;

export default Label;

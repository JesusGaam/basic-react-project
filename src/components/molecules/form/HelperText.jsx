import React, { } from "react";
import styled, { } from 'styled-components';

const HelperText = ({ options }) => {
  const {
    error = false,
    helperText = '',
  } = options;

  return (
    <>
      {
        helperText &&
        <HelperTag className={error ? 'error' : ''}>
          {helperText}
        </HelperTag>
      }
    </>
  );
}
const HelperTag = styled.div`
  padding-left: ${({ theme }) => theme.horizontalPaddingInput}px;
  margin-top:4px;
  font-size: ${({ theme }) => theme.sizeText - 4}px;
    
  &.error{
    color: ${({ theme }) => theme.colorDanger};
  }
`;

export default HelperText;

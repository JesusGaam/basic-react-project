import React, { } from "react";
import styled, { } from 'styled-components';
import { lightenDarkenColor } from "../../../utils/Utilities";

const ButtonInput = ({ options, className }) => {
  const {
    mode = "primary",
    disabled = false,
    defaultValue = '',
    emit = () => { console.log("click botoncito"); }
  } = options;

  return (
    <Button
      className={`${mode} ${className} ${disabled ? 'disabled' : ''}`}
      type="button"
      value={defaultValue}
      onClick={(e) => emit(e.target.value)}
    />
  );
}

const Button = styled.input`
  &.primary{
    background-color: ${({ theme }) => theme.colorPrimary};
    border-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorButtonPrimary};
    
    &:hover{
      background-color: ${({ theme }) => lightenDarkenColor(theme.colorPrimary, 10)};
    }
    &:active{
      background-color: ${({ theme }) => lightenDarkenColor(theme.colorPrimary, -10)};
    }
  }

  &.secundary{
    background-color: ${({ theme }) => theme.colorSecundary};
    border-color: ${({ theme }) => theme.colorSecundary};
    color: ${({ theme }) => theme.colorButtonSecundary};

    &:hover{
      background-color: ${({ theme }) => lightenDarkenColor(theme.colorSecundary, 10)};
    }
    &:active{
      background-color: ${({ theme }) => lightenDarkenColor(theme.colorSecundary, -10)};
    }
  }
`;

export default ButtonInput;

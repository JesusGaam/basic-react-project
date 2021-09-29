import { css } from 'styled-components';

export const appearance = (value = 'none') => css`
  -webkit-appearance: ${value};
  -moz-appearance: ${value};
  -ms-appearance: ${value};
  appearance: ${value};
`;

export const borderRadius = (value = '8px') => css`
  -webkit-border-radius: ${value};
  -moz-border-radius: ${value};
  border-radius: ${value};
`;

export const borderRadiusTopLeft = (value = '8px') => css`
  -webkit-border-top-left-radius: ${value};
  -moz-border-radius-topleft: ${value};
  border-top-left-radius: ${value};
`;

export const borderRadiusBottomLeft = (value = '8px') => css`
  -webkit-border-bottom-left-radius: ${value};
  -moz-border-radius-bottomleft: ${value};
  border-bottom-left-radius: ${value};
`;

export const widthFill = () => css`
  width: 100%;
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
`;


export const transition = (options) => css`
  -webkit-transition: ${options};
  -moz-transition: ${options};
  -o-transition: ${options};
  transition: ${options};
`;

export const transform = (options) => css`
  -moz-transform: ${options};
  -webkit-transform: ${options};
  -o-transform: ${options};
  -ms-transform: ${options};
  transform: ${options};
`;

export const animation = (options) => css`
  -webkit-animation: ${options};
  -moz-animation: ${options};
  -o-animation: ${options};
  -ms-animation: ${options};
  animation: ${options};
`;


export const noSelect = css`
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

`;
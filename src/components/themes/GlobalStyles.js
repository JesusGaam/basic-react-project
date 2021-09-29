//ref: https://scalablecss.com/styled-components-global-styles/

import { createGlobalStyle, css } from 'styled-components';
import { PrimaryFont, SecundaryFont } from './Fonts';
import { borderRadius, appearance } from './Mixins';

const GlobalStyle = createGlobalStyle`
  ${PrimaryFont};
  ${SecundaryFont};

  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    
    &:focus{
        outline: none;
    }
    &:not(.secundary-font){
      font-family: ${({ theme }) => theme.fontFamilyNamePrimary};
    }
    &.secundary-font{
      font-family: ${({ theme }) => theme.fontFamilyNameSecundary};
    }
  }

  body {
    margin: 0;
    min-width: 280px;
    padding: ${({ theme }) => theme.headerHeight}px 0 0 0;
    color: ${({ theme }) => theme.colorText};
    font-size: ${({ theme }) => theme.sizeText}px;
    background: ${({ theme }) => theme.colorBackground};
  }
  
  header, section, footer{
    &.container{
      padding-left: 14px;
      padding-right: 14px;
      //overflow: hidden;
      
      > div{
        margin: 0 auto;
        box-sizing: border-box;
        min-width: ${({ theme }) => theme.breackPointXL - 28}px;
      }
    }
  }

  h1, .h1, h2, .h2, h3, .h3{
    font-weight: bold;
    line-height: 1.4;

    + *:not(b):not(i):not(span):not(a):not(blockquote):not(cite){
      padding-top: 20px;
    }
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.sizeH1}px;
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.sizeH2}px;
  }

  h3, .h3 {
    font-size: ${({ theme }) => theme.sizeH3}px;
  }

  p, b, i, ul, ol, li, blockquote, cite{
    + h1, + .h1, + h2, + .h2, + h3, + .h3{
      padding-top: 32px;
    }

    + :not(b):not(i):not(span):not(a):not(blockquote):not(cite):not(h1):not(h2):not(h3):not(.h1):not(.h2):not(.h3){
      padding-top: 20px;
    }
  }

  ol, ul{
    &:not(.bullet):not(.decimal):not(.roman){
      list-style: none;
    }

    &.decimal, &.bullet, &.roman{
      padding-left: 40px;
      li {
        padding-left: 0;
      }
    }
    &.bullet{
      list-style: disc;
    }
    &.decimal{
      list-style: decimal;
    }
    &.roman{
      list-style: lower-roman;
    }
  }

  a{
    text-decoration: none;
    
    &:not(.secundary){
      color: ${({ theme }) => theme.colorLink};
    }
    &:hover{
      color: ${({ theme }) => theme.colorLinkHover};
    }
    &:active{
      color: ${({ theme }) => theme.colorLinkActive};
    }
    &:visited{
      color: ${({ theme }) => theme.colorLinkVisited};
    }
    
}


  .form-element{
    +.form-element{
      margin-top: 20px
    }
  }

  input{
    padding: 10px ${({ theme }) => theme.horizontalPaddingInput}px;
    font-size: ${({ theme }) => theme.sizeText}px;
    font-weight: normal;
    border-width: 1px;
    border-style: solid;
    ${borderRadius(css`${({ theme }) => theme.borderRadiusInput}px`)};
    
    &[type=text], 
    &[type=email],
    &[type=password]{
      color: ${({ theme }) => theme.colorText};
      background-color: ${({ theme }) => theme.colorBackgroundInput};
      border-color: ${({ theme }) => theme.colorBorderInput};
    }
  }

  input,
  select {
    ${appearance()};
  }

  .text-primary{
    color: ${({ theme }) => theme.colorPrimary}
  }
  .text-secondary{
    color: ${({ theme }) => theme.colorSecundary}
  }
  .text-success{
    color: ${({ theme }) => theme.colorSuccess}
  }
  .text-info{
    color: ${({ theme }) => theme.colorInfo}
  }
  .text-warning{
    color: ${({ theme }) => theme.colorWarning}
  }
  .text-danger{
    color: ${({ theme }) => theme.colorDanger}
  }
  .text-disabled{
    color: ${({ theme }) => theme.colorDisabled}
  }
`;

export default GlobalStyle;









import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './fonts';
import { primaryColor } from './themes';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-family: ${fontFamily};
    margin: 0;
    box-sizing: border-box;
    background-color: ${primaryColor};
  }
`;

export default GlobalStyles;

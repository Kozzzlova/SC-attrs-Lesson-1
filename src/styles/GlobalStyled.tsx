import { createGlobalStyle } from 'styled-components';
import { myTheme } from './ThemeStyled';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }  

  body, button {
    line-height: 20px;
    margin: 0;
   font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;

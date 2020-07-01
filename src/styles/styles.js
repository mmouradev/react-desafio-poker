import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f1f1f1;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, button, input {
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    padding: 40px 20px
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

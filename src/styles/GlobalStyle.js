import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
    ${variables}

    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
	    line-height: 1;
        background: linear-gradient(180deg,rgba(82, 98, 132, 1) 0%,rgba(166, 168, 177, 1) 100%);
  background-attachment: fixed;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .loading-container {
        width: 100vw ;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-light);
        overflow: hidden;
    }
`;

export default GlobalStyle;

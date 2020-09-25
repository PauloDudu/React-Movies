import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #000;
    }

    html, body, #root {
        height: 100%;
    }

    body, input, buttom {
        font: 16px sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
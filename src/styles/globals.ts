import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 400;
}

    html, body, #root {
    background-color: ${({ theme }) => theme.colors.bgPrimary};

    button {
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    input {
        border: none; 
        outline: none; 
        background: none; 
 
    }

    table {
    border-collapse: collapse;
    border-spacing: 0;
}

}
`;

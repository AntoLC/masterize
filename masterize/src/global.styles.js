import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Open Sans Condensed";
    }

    a{
        text-decoration: none;
        color:black;
    }

    * {
        box-sizing: border-box;
    }

    .app{
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 50px;
    }
`;
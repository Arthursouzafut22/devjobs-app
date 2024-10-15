import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Arial', sans-serif;
}

a{
    display: block;
    text-decoration:none;
}

ul>li{
    padding: 0;
    list-style: none;
}`;

export default GlobalStyle;

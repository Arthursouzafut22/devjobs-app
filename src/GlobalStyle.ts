import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Arial', sans-serif;
    background-color:#F2F2F2;
}

a{
    display: block;
    text-decoration:none;
}

ul>li{
    padding: 0;
    list-style: none;
}`;

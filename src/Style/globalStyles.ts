import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

body{
    background: rgb(8,23,135);
    background: linear-gradient(90deg, rgba(8,23,135,0.9528186274509804) 25%, 
    rgba(60,60,186,1) 55%, rgba(109,59,166,1) 92%);
    -webkit-font-smoothing:antialiased;
}

border-style, input, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

h1 , h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{
    cursor: pointer;
}

input{
    background: rgb(204, 204, 204);    
    outline: none;
}

label{
    font-weight: 500;
}


`
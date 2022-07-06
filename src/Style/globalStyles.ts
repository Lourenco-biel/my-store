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

h1 , h2, h3, h4, h5, h6, i{
    font-weight: 600;
}

button{
    cursor: pointer;
      
    &:hover{
        filter:brightness(0.7)        
    }
    &:active{
        filter:brightness(0.9)  
    }
}

input{
    background: rgb(204, 204, 204);    
    outline: none;
}

label{
    font-weight: 500;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content:center;

}
.react-modal-content{
    width:100%;
    height:100%;
    max-height: 578px;
    max-width: 1190px;
    background: rgb(204, 204, 204);
    padding: 3rem;
    position: relative;
    border-radius: 2rem;
    outline: none;

    .ProductName, .name{
        max-width: 13rem;
        word-break: break-word;
    }

   th,td {
        text-align: start;
        padding: 0.8rem;
    }

    td {
        background: #9898989e;  
        border-radius: 0.7rem;
        font-size: 1em;
        color: #464646;
    }
    
    h1{
        margin: 1rem 0 1rem 0.3rem;
        width: 17rem;
        border-bottom: 1px solid black;
    }

    button{
        background: none;
        border: none;
        margin: 0 0.4rem ;
    }
    .react-modal-close{
        position: absolute;
        right:2rem;
        top:1.8rem;
    }
}

`
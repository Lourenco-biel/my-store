import  styled  from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: row-reverse;

    width: 80rem;
    height:37rem;

    border-radius: 2rem;
    margin: 1rem 5rem ;
    padding-top: 2.5rem;
    background: #c9c6c69e;   

    img{
        position: absolute; 
        left:8rem;
        top:7rem;
        height: 60%;
        width:40%;
    }

    @media screen and (max-width: 780px){
        .group{
            display: none;
        }
        margin: 5rem 5rem ;
        li{
        margin-right: 0;
       }
    }
    @media screen and (max-width: 440px){
        width: 87%;
        height: 93%;
        margin: 2em 1.5em 1em 2em;
        li{
        margin-right: 0;
       }
    }
`
export const ContainerCadastro = styled.form`
    display: flex;
    flex-direction: column; 

    h1{
        width: 16rem;
        line-height: 2.2rem;
        color: #d8d7d7;
        border-bottom: 1px solid rgb(8,23,135);
    }

    label{
        margin:2rem 2rem 0 0;
    }

    input{
        width: 18rem;
        height: 2.4rem;
        border-radius: 1.5rem;
        border: none;
        border-bottom: 3px solid rgb(8,23,135);
        box-shadow: 2px 4px 4px rgb(8,23,135);
        padding-left:1rem;
        margin-top: 0.1rem;
    }

    .registration,.goList {
        color: #6cd0bf;
        width: 18rem;
        height: 2.5rem;

        border-radius: 1.5rem;
        border: none;
        border-bottom: 3px solid rgb(8,23,135);

        box-shadow: 2px 4px 4px rgb(8,23,135);
        background: rgb(8,23,135);
   }
        
   .registration{
        margin-top: 2.5rem;
   }

   .goList{
    margin-top: 1rem;
    i{
        display: none;
    }
    &:hover i{
            display: initial;
            margin-left: 6px;
        }
   }
   
   @media screen and (max-width: 440px){
       h1{
        margin: 2rem 6rem 6rem 0;
       }
       label{
        font-size: 1.5rem;
       }
       input,.goList,.registration{
        width: 21rem;
        height: 2.9rem;
       }
       .goList{
        margin-top: 2rem;
       }
       .registration{
        margin-top: 4.5rem;
       }
       li{
        margin-right: 0;
       }
       
    }
    @media screen and (max-width: 376px){
       h1{
        margin: 0 5rem 0 0 ;
       }
       input,.goList,.registration{
        width: 19rem;
       }
       li{
        margin-right: 0;
       }
    }
`


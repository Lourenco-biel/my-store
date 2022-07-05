import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: end;
`

export const ContainerItens = styled.form`
    width: 24rem;
    height: 35rem;
    margin: 2rem 4rem;
    border-radius: 2rem;
    background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.4) 100%);
    
    h1{
        width: 16.10rem;
        line-height: 2rem;
        color: #d8d7d7;
        margin: 1.9rem 0 15rem 2rem;
        border-bottom: 1px solid rgb(204, 204, 204);
    }


   label{
        margin-left: 2.6rem;
    }

    input{
        width: 20rem;
        height: 2rem;

        border-radius: 1rem;
        border: none;

        margin: 0.4rem 0 0 2.5rem;
        padding-left:1rem;
    }

    button{
        font-size: 1rem;
        color: #6cd0bf;

        width: 21rem;
        height: 2.60rem;

        border-radius: 1rem;
        border: none;
        margin: 2rem 0 0 2rem;
        background: rgb(8,23,135);
        box-shadow: 3px 3px 10px rgb(8,23,135);
        
        &:hover{
        filter:brightness(0.7)        
        }
        &:active{
            filter:brightness(0.9)  
        }
    }
   
`
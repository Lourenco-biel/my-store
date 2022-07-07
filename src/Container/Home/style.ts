import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: end;

    .Eco{
        width: 280px;
        height: 345px;
        position: absolute; 
        left:10rem;
        top:8rem;
    }
    .We{
        width: 70%;
        margin: 3.8rem 3rem 6rem;
   }
    @media screen and (max-width: 860px){
        .Eco{
            display: none;
        }
    } 
    
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
        margin: 1.9rem 0 1rem 2rem;
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
    }

    @media screen and (max-width: 450px){
        width: 30rem;
        height:40rem;
    
        input{
            width: 18rem;
            height: 2rem;
            margin: 1.2rem 0 0 1rem;
            padding: 7px;
        }
        i{
            margin-left:2rem;
            padding: 0;
        }
        label{
            margin-top: 60px;
            margin-left:0;
            padding: 0;
        }
        button{
            width: 18rem;
            height: 3rem;
            margin-top: 16%;
            margin-left: 7%;
        }
       
    }

      @media screen and (max-width: 390px){

        height:50rem;
    
        input{
            width: 18rem;
            height: 2rem;
            margin: 1rem 0 0 0.7rem;
            padding: 7px;
        }
       
        button{
            width: 18rem;
            height: 3rem;
            margin-top: 3rem;
            margin-left: 0.7rem;
        }
       
    }
`
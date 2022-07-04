import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: end;
    background: rgb(8,23,135);
    background: linear-gradient(90deg, rgba(8,23,135,0.9528186274509804) 25%, 
    rgba(60,60,186,1) 55%, rgba(109,59,166,1) 92%);
    width: 100vw;
    height: 100vh;
`

export const ContainerItens = styled.form`
    width: 400px;
    height: 87%;
    border-radius: 27px;
    margin: 50px 100px  0;
    background: linear-gradient(109.46deg, rgba(201, 201, 201, 0.8) 1.57%, rgba(196, 196, 196, 0.1) 100%);
    
    h1{
        width: 250px;
        font-size: 35px;
        line-height: 39px;
        color: #d8d7d7;
        margin: 30px 0 60% 8%;
        border-bottom: 1px solid rgb(204, 204, 204);
    }


   label{
        margin-left: 10%;
        color: black;
        font-size: 16px;
        font-weight: bold;
    }

    input{
        width: 320px;
        height: 37px;
        border-radius: 30px;
        border: none;
        margin: 4px 0 0 9%;
        padding-left:15px;
        font-size: 16px;
        font-weight: bold;
        background: rgb(204, 204, 204);    
    }

    button{
        width: 340px;
        height: 45px;
        border-radius: 30px;
        border: none;
        margin-top: 8%;
        margin-left: 7%;
        background: rgb(8,23,135);
        box-shadow: 3px 3px 10px rgb(8,23,135);
        color: #6cd0bf;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.5;
        }
    }
   
`
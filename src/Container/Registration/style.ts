import  styled  from 'styled-components';


export const Container = styled.div`
    background: rgb(8,23,135);
    background: linear-gradient(90deg, rgba(8,23,135,0.9528186274509804) 25%, 
    rgba(60,60,186,1) 55%, rgba(109,59,166,1) 92%);
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 95%;
    height:95%;
    border-radius: 27px;
    margin: 12px 100px ;
    padding-top: 45px;
    background: #c9c6c69e;   

   
`
export const ContainerCadastro = styled.form`
    display: flex;
    flex-direction: column; 

    h1{
        width: 250px;
        font-size: 35px;
        line-height: 39px;
        margin:0 30px 0 0;
        color: #d8d7d7;
        border-bottom: 1px solid rgb(8,23,135);
    }

    h3{
        margin:30px 30px 0 0 ;
        color: black;
        font-size: 16px;
        font-weight: bold;

        span{
            margin-left:25px;
        }
    }

    label{
        margin:30px 30px 0 0;
        color: black;
        font-size: 16px;
        font-weight: bold;
    }



    input{
        width: 300px;
        height: 37px;
        border-radius: 20px;
        border: none;
        border-bottom: 3px solid rgb(8,23,135);
        box-shadow: 2px 4px 4px rgb(8,23,135);
        padding-left:15px;
        margin-top: 5px;
        font-size: 16px;
        font-weight: bold;
        background: rgb(204, 204, 204);    
    }

    .cadastro,.Lista {
        width: 310px;
        height: 45px;
        border-radius: 20px;
        border: none;
        border-bottom: 3px solid rgb(8,23,135);
        box-shadow: 2px 4px 4px rgb(8,23,135);
        background: rgb(8,23,135);
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
        
   .cadastro{
        margin-top: 9%;
   }

   

  

`

export const ContainerImg = styled.div`
    
`
import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const ContainerItens = styled.div`
    width: 80rem;
    height:37rem;

    border-radius: 2rem;
    margin: 1rem 5rem ;
   
    background: #c9c6c69e;   
    overflow-y: auto;
    ::-webkit-scrollbar {
    width: 0px;
}
    .ProductName, .name{
        max-width: 13rem;
        word-break: break-word;
    }

    table th,td {
        text-align: start;
        padding: 0.8rem;
    }

    td {
        background: #c9c6c69e;  
        border-radius: 0.7rem;
        font-size: 1em;
        color: #464646;
    }
    
    button{
        background: none;
        border: none;
        margin: 0 0.4rem ;
    }

    h1{
        margin: 1.7rem 0 0 16rem;
        width: 17rem;
        border-bottom: 1px solid black;
    }

    .List,.Favorite{
    display: flex;
    justify-content: center;
  }

`

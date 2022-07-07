import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    justify-content: end; 
    
    li{
    display: inline-block;
    margin-right: 1.9rem ;
    margin-top: 1rem;
    }
    i{
        margin-left: 0.8rem;
    }
    button{
        background: none;
        border: none;
        outline: none;
    }
    @media screen and (max-width: 780px){
        li{
            margin-right: 0.9rem;
        }
        ul{
            font-size: 12px;
        }
    }
    @media screen and (max-width: 375px){
        li{
            margin-right: 0.5rem;
        }
    }

`
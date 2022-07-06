import React, {useState} from 'react';
import * as C from './style';
import { useHistory } from 'react-router-dom';
import Eco from '../../Assets/Eco.png'
import We from '../../Assets/We.png'

export function Home(){
  const [userName, setUserName] = useState<string>('')
  const history = useHistory()

  const userRegister = (e: any) => {
    e.preventDefault()
    if(userName === ''){
      alert('Preencha o nome')
    }else{
      localStorage.setItem('userName', userName)
      history.push('/products')
    }
  }

    return (
      <C.Container>
        <img src={Eco} className='Eco' alt='Imagem da loja'/>
        <C.ContainerItens>
          <h1>Login</h1>
          <img src={We} className='We' alt='Seja bem vindo!' />
          <label ><i>Nome:</i>
            <input type='text' onChange={(e)=> setUserName(e.target.value)} name='name' placeholder='Escreva seu Nome Completo' required />
            <button type='submit' onClick={(e) => userRegister(e)} >Ir para cadastro</button>
          </label>
        </C.ContainerItens>
        </C.Container>
    );
}


import React, {useState} from 'react';
import * as C from './style';

function Home(){
  const [userName, setUserName] = useState<string>('')

  const userRegister = (e: any) => {
    e.preventDefault()
    if(userName === ''){
      alert('Preencha o nome')
    }else{
      localStorage.setItem('userName', userName)
    }
    
  }

    return (
        <C.Container>
        <C.ContainerItens>
          <h1>Login</h1>
          <label ><i>Nome:</i>
            <input type='text' onChange={(e)=> setUserName(e.target.value)} name='name' placeholder='Escreva seu Nome Completo' required />
            <button type='submit' onClick={(e) => userRegister(e)} >Ir para cadastro</button>
          </label>
        </C.ContainerItens>
      </C.Container>
    );
}

export default Home;
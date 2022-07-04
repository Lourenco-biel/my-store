import React from 'react';
import * as C from './style';

function Home(){
    return (
        <C.Container>
        <C.ContainerItens>
          <h1>Login</h1>
          <label ><i>Nome:</i>
            <input type='text'  name='name' placeholder='Escreva seu Nome Completo' required />
            <button type='submit' >Ir para cadastro</button>
          </label>
        </C.ContainerItens>
      </C.Container>
    );
}

export default Home;
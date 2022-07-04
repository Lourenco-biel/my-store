import React from "react";
import * as C from './style'

function Registration(){


    return(
        <C.Container>
        <C.ContainerItens>

          <C.ContainerCadastro>
            <h1>Cadastre seu produto!</h1>
            
            <label >Nome do produto:<br />
              <input  type='text' name='nome' placeholder='Escreva o nome do produto' required />
            </label>

            <label >Valor do produto:<br />
              <input  type='number' name='valor' placeholder='Valor do produto' required />
            </label>

            <label >SKU:<br />
              <input  type='number' name='valor' placeholder='Valor do produto' required />
            </label>
            <button type='submit'  className='cadastro'>Cadastrar</button>
            <button name='Lista' className='cadastro'>Ir para lista </button>
          </C.ContainerCadastro>
          <C.ContainerImg>
        
          </C.ContainerImg>
        </C.ContainerItens>
      </C.Container>
    )
}

export default Registration;
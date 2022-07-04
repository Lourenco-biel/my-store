import React, {useState} from "react";
import * as C from './style'

function Registration(){
const [productName, setProductName] = useState<string>('')
const [productValue, setProductValue] = useState<number>(Number)
const [productSKU, setProductSKU] = useState<number>(Number)


    return(
        <C.Container>
        <C.ContainerItens>

          <C.ContainerCadastro>
            <h1>Cadastre seu produto!</h1>
            
            <label >Nome do produto:<br />
              <input  type='text' onChange={(e) => setProductName(e.target.value)} name='nome' placeholder='Escreva o nome do produto' required />
            </label>

            <label >Valor do produto:<br />
              <input  type='number' onChange={(e)=> setProductValue(parseFloat(e.target.value))} name='valor' placeholder='Valor do produto' required />
            </label>

            <label >SKU:<br />
              <input  type='number' onChange={(e)=> setProductSKU(parseFloat(e.target.value))} name='valor' placeholder='Valor do produto' required />
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
import React, {useState, useEffect} from "react";
import * as C from './style'
import { useHistory } from 'react-router-dom';

export function Registration(){ 
const [productExistent, setProductExistent] = useState<object>()
const [productName, setProductName] = useState<string>('')
const [productValue, setProductValue] = useState<number>(Number)
const [productSKU, setProductSKU] = useState<number>(Number)
const [productId, setProductId] = useState<string>('')
const history = useHistory()

const nextPage = () => {
  //navigate to list page
  history.push('/List')
}


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
            <button type='submit'  className='registration'>Cadastrar</button>
            <button name='Lista' onClick={()=>nextPage()} className='goList'>Ir para lista </button>
          </C.ContainerCadastro>
      
        </C.ContainerItens>
      </C.Container>
    )
}

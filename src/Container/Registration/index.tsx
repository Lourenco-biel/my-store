import React, {useState} from "react";
import * as C from './style'
import { useHistory } from 'react-router-dom';
import { Product } from "../../Interface/Product";
import { createProduct } from '../../Services/Products';

export function Registration(){ 
const [productName, setProductName] = useState<string>('')
const [productValue, setProductValue] = useState<number>(Number)
const [productSKU, setProductSKU] = useState<number>(Number)
const history = useHistory()


const productRegister = (e:any)=>{
  e.preventDefault();
  const userName = localStorage.getItem('userName')!
  // create product
  const products : Product = {
    name: productName,
    value: productValue,
    SKU: productSKU,
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
    updatedBy: userName
  }
  //Check if they have been filled
  if (productName === '') {
    alert('Preencha o campo nome')
  }
  else if (productValue === 0) {
    alert('Preencha o campo valor')
  }
  else if (productSKU === 0) {
    alert('Preencha o campo SKU')
  } else {
    createProduct(products)
    nextPage('List')
  }
}


//page navigation function
const nextPage = (e:string) =>{
  history.push(e) 
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
            <button type='submit'  onClick={(e)=>productRegister(e)} className='registration'>Cadastrar</button>
            <button name='Lista' onClick={()=>nextPage('/List')} className='goList'>Ir para lista </button>
          </C.ContainerCadastro>
      
        </C.ContainerItens>
      </C.Container>
    )
}


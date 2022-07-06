import React, { useEffect, useState } from "react";
import * as C from './style'
import { useHistory } from 'react-router-dom';
import { Product } from "../../Interface/Product";
import { createProduct, listProductById, updateProductById } from '../../Services/Products';

export function Registration() {
  const [existentProduct, setExistentProduct] = useState<object>()
  const [productName, setProductName] = useState<string>('')
  const [productValue, setProductValue] = useState<number>(Number)
  const [productSKU, setProductSKU] = useState<number>(Number)
  const [productId, setProductId] = useState<string>('')
  const history = useHistory()


  const productRegister = (e: any) => {
    e.preventDefault();
    const userName = localStorage.getItem('userName')!
    if (productId) {
      // Update product
      if (userName) {
        const product: Product = {
          ...existentProduct,
          name: productName,
          SKU: productSKU,
          value: productValue,
          updatedAt: new Date().toLocaleString(),
          updatedBy: userName
        }
        updateProductById(product)
        nextPage('List')
      } else {
        // create product
        const products: Product = {
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

    }

  }
  //page navigation function
  const nextPage = (e: string) => {
    history.push(e)
  }

  //get the id sent by the url and set it in the id variable
  useEffect(() => {
    let url = new URLSearchParams(window.location.search)
    let productId = url.get('id')
    if (productId) {
      setProductId(productId)
      getProductById(productId)
    }
  }, [])
  //list the product according to the id passed
  const getProductById = async (id: string) => {
    let product = await listProductById(id)
    setExistentProduct(product)
    setProductValue(parseFloat(product.value))
    setProductName(product.name)
    setProductSKU(parseFloat(product.SKU))
  }



  return (
    <C.Container>
      <C.ContainerItens>
        <C.ContainerCadastro>
          {productId !== '' ? (
            <h1>Atualize seu produto!</h1>
          ) : (
            <h1>Cadastre seu produto!</h1>
          )}

          <label >Nome do produto:<br />
            <input type='text' onChange={(e) => setProductName(e.target.value)} value={productName} name='nome' placeholder='Escreva o nome do produto' required />
          </label>

          <label >Valor do produto:<br />
            <input type='number' onChange={(e) => setProductValue(parseFloat(e.target.value))} value={productValue} name='valor' placeholder='Valor do produto' required />
          </label>

          <label >SKU:<br />
            <input type='number' onChange={(e) => setProductSKU(parseFloat(e.target.value))} value={productSKU} name='valor' placeholder='Valor do produto' required />
          </label>
          {productId !== '' ? (
            <button type='submit' onClick={(e) => (productRegister(e))} className='registration'>Salvar</button>
          ) : (
            <button type='submit' onClick={(e) => (productRegister(e))} className='registration'>Cadastrar</button>
          )}
          <button name='Lista' onClick={() => nextPage('/List')} className='goList'>Ir para lista </button>
        </C.ContainerCadastro>

      </C.ContainerItens>
    </C.Container>
  )
}


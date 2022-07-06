import react, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header';
import { useHistory } from 'react-router-dom';
import * as C from './style'
import { Product } from '../../Interface/Product';
import { deleteItem, listProducst as listProducst_ } from '../../Services/Products';

export function ListProducts() {
    const [allProductsList, setAllProductsList] = useState<Array<Product>>([])
    const history = useHistory()

    //function that lists the products
    const getProducts = async () =>{
        let products = await listProducst_()
        setAllProductsList(products)
    }
    //start the page with the list of products
    useEffect(()=>{
        getProducts()
    },[allProductsList])
    //function that deletes object
    const handleDelete = async(id:any)=>{
        try {
            await deleteItem(id)
        } catch (error) {
            console.log(error)
        }
    }
    //"function that sends the product id to the registration page"
    const productUpdate = async (id: any) => {
        try {
            history.push(`/products?id=${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <C.Container>
                <C.ContainerItens>
                <Header/>
                    <h1>Lista</h1>
                    <div className='List'>
                        <table >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>SKU</th>
                                    <th>Valor</th>
                                    <th>Criado em</th>
                                    <th>Atualizado em</th>
                                    <th>Editado por</th>

                                </tr>
                            </thead>
                            <tbody>
                                {allProductsList.map((product)=>(
                                    <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td className='ProductName'>{product.name}</td>
                                    <td>{product.SKU}</td>
                                    <td>{product.value}</td>
                                    <td>{product.createdAt}</td>
                                    <td>{product.updatedAt}</td>
                                    <td>{product.updatedBy}</td>
                                    <td>
                                        <button onClick={()=>productUpdate(product.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button onClick={()=>handleDelete(product.id)}><i className="fa-solid fa-trash"></i></button>
                                        <button ><i className="fa-regular fa-star"></i></button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* //Colocar em um modal */}
                    <h1>Favoritos</h1>
                    <div className='Favorite'>
                    <table>
                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>SKU</th>
                                <th>Valor</th>
                                <th>Criado em</th>
                                <th>Atualizado em</th>
                                <th>Editado por</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >3</td>
                                <td className='ProductName'>Celular</td>
                                <td>1313</td>
                                <td>18,00</td>
                                <td>12/02/2020</td>
                                <td>12/02/2020</td>
                                <td>Gabriel</td>
                                <td>
                                    <button><i className="fa-solid fa-pen-to-square"></i></button>
                                    <button><i className="fa-solid fa-trash"></i></button>
                                    <button><i className="fa-solid fa-star"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </C.ContainerItens>
            </C.Container>
        </>
    );
}


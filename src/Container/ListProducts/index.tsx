import react, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header';
import { useHistory } from 'react-router-dom';
import * as C from './style'
import { Product } from '../../Interface/Product';
import { deleteItem, listProducst as listProducst_ } from '../../Services/Products';
import Modal from 'react-modal'
Modal.setAppElement('#root')


export function ListProducts() {
    const [allProductsList, setAllProductsList] = useState<Array<Product>>([])
    const [nonFavoriteProductsList, setNonFavoriteProductsList] = useState<Array<Product>>([])
    const [favoriteProductsList, setfavoriteProductsList] = useState<Array<Product>>([])
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    const history = useHistory()

    //function that lists the products
    const getProducts = async () => {
        let products = await listProducst_()
        setAllProductsList(products)
    }
    //start the page with the list of products
    useEffect(() => {
        getProducts()
    }, [])
    //"shows the list updated every time we remove or add an object to the list (favorite or not)"
    useEffect(() => {
        parseFavoriteProducts()
    }, [allProductsList])
    //function that deletes object
    const handleDelete = async (id: any) => {
        try {
            await deleteItem(id)
        } catch (error) {
            console.log(error)
        }
    }
    //function that sends the product id to the registration page
    const handleproductUpdate = async (id: any) => {
        try {
            history.push(`/products?id=${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    //Add products to favorites list
    const handlecheckStar = async (id: string) => {
        let favoriteIds: string[] = []
        let oldFavoriteIds = localStorage.getItem("favoriteIds")
        if (oldFavoriteIds) {
            favoriteIds = JSON.parse(oldFavoriteIds)
        }
        if (favoriteIds.find(x => x === id)) {
            // should not add
        } else {
            favoriteIds.push(id)
            localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds))
        }
        parseFavoriteProducts()
    }
    // remove products from favorites list
    const handlerUnCheckStar = async (id: string) => {
        let NofavoriteIds: string[] = []
        let FavoriteIds = localStorage.getItem("favoriteIds")

        if (FavoriteIds) {
            NofavoriteIds = JSON.parse(FavoriteIds)
        }
        if (NofavoriteIds.find(x => x === id)) {
            let productsId = NofavoriteIds.filter(x => x !== id)
            localStorage.setItem("favoriteIds", JSON.stringify(productsId))
            parseFavoriteProducts()
        }
        // should not add
    }
    // separates favorite from unfavorable products and saves in state variables
    const parseFavoriteProducts = async () => {
        let favoriteIdsString = localStorage.getItem("favoriteIds")
        let favoriteProducts: Product[] = []
        let nonFavoriteProducts: Product[] = []

        if (favoriteIdsString) {
            let favoriteIds: string[] = JSON.parse(favoriteIdsString)

            for (let product of allProductsList) {
                let found = favoriteIds.find(id => id === product.id)

                if (found) {
                    favoriteProducts.push(product)
                } else {
                    nonFavoriteProducts.push(product)
                }
            }
        } else {
            nonFavoriteProducts = allProductsList
        }
        setfavoriteProductsList(favoriteProducts)
        setNonFavoriteProductsList(nonFavoriteProducts)
    }
    //function that opens the modal
    const handleOpenNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true)
    }
    //function that closes the modal
    const handleCloseNewTransactionModal = () => {
        setIsNewTransactionModalOpen(false)
    }


    return (
        <>
            <C.Container>
                <C.ContainerItens>
                    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
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
                                {nonFavoriteProductsList.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td className='ProductName'>{product.name}</td>
                                        <td>{product.SKU}</td>
                                        <td>{product.value}</td>
                                        <td>{product.createdAt}</td>
                                        <td>{product.updatedAt}</td>
                                        <td>{product.updatedBy}</td>
                                        <td>
                                            <button onClick={() => handleproductUpdate(product.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                            <button onClick={() => handleDelete(product.id)}><i className="fa-solid fa-trash"></i></button>
                                            <button onClick={() => handlecheckStar(product.id!)}><i className="fa-regular fa-star"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Modal isOpen={isNewTransactionModalOpen}
                        onRequestClose={handleCloseNewTransactionModal}
                        overlayClassName="react-modal-overlay"
                        className="react-modal-content"
                    >
                        <button className='react-modal-close'
                            onClick={handleCloseNewTransactionModal}><i className="fa-solid fa-x"></i>
                        </button>
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
                                    {favoriteProductsList.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td className='ProductName'>{product.name}</td>
                                            <td>{product.SKU}</td>
                                            <td>{product.value}</td>
                                            <td>{product.createdAt}</td>
                                            <td>{product.updatedAt}</td>
                                            <td>{product.updatedBy}</td>
                                            <td>
                                                <button onClick={() => handleproductUpdate(product.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button onClick={() => handleDelete(product.id)}><i className="fa-solid fa-trash"></i></button>
                                                <button onClick={() => handlerUnCheckStar(product.id!)}><i className="fa-solid fa-star"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Modal>
                </C.ContainerItens>
            </C.Container>
        </>
    );
}


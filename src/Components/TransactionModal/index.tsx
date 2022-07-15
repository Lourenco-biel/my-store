
import Modal from 'react-modal'
import { Product } from '../../Interface/Product'
Modal.setAppElement('#root')


interface ContainerModalProps {
    favoriteProductsList: Product[],
    isOpen: boolean,
    onRequestClose: () => void,
    handleproductUpdate: (id: any) => void,
    handleDelete: (id: any) => void,
    handlerUnCheckStar: (id: any) => void;
}


export function TransactionModal({
        isOpen,
        favoriteProductsList,
        onRequestClose,
        handleproductUpdate,
        handleDelete,
        handlerUnCheckStar
    }: ContainerModalProps) {

    return (

        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className='react-modal-close'
                onClick={onRequestClose}><i className="fa-solid fa-x"></i>
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
    )
}


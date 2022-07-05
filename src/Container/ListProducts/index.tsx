import * as C from './style'

export function ListProducts() {



    return (
        <>
            <C.Container>
                <C.ContainerItens>
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
                                <tr>
                                    <td>3</td>
                                    <td className='ProductName'>celular</td>
                                    <td>1313</td>
                                    <td>18,00</td>
                                    <td>12/02/2020</td>
                                    <td>12/02/2020</td>
                                    <td>Gabriel</td>
                                    <td>
                                        <button ><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button ><i className="fa-solid fa-trash"></i></button>
                                        <button ><i className="fa-regular fa-star"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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


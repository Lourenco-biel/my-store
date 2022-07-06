import { useHistory } from 'react-router-dom';
import * as C from './style'

interface HeaderProps{
    onOpenNewTransactionModal: ()=> void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    const history = useHistory()
    //getting information from localstore
    const userName = localStorage.getItem('userName')
    //page navigation function
      const nextPage = (e:string) =>{
        history.push(e)
       }
      const logout = () =>{
        //erasing the data
        localStorage.clear()
        nextPage('/')
       }
     

    return (
        <C.Container>
            <ul>
                <li>Olá <i>{userName}</i></li>
                <li><button onClick={()=> nextPage('/List')}>Home</button></li>
                <li><button onClick={()=> nextPage('/products')}>Cadastrar</button></li>
                <li><button onClick={onOpenNewTransactionModal}>Favoritos</button></li>
                <li><button onClick={()=> logout()}> Sair</button></li>
            </ul>
        </C.Container>

    );


}
import { useHistory } from 'react-router-dom';

import * as C from './style'

export function Header() {
    const history = useHistory()
    //getting information from localstore
    const userName = localStorage.getItem('userName')

    const nextPageList = () =>{
        history.push('/List')
    
      }
      const nextPageregister = () =>{
        history.push('/products')
     
       }
      const logout = () =>{
        //erasing the data
        localStorage.clear()
        history.push('/')
       }

    return (
        <C.Container>
            <ul>
                <li>Olá <i>{userName}</i></li>
                <li><button onClick={()=> nextPageList()}>Home</button></li>
                <li><button onClick={()=> nextPageregister()}>Cadastrar</button></li>
                <li><button onClick={()=> logout()}> Sair</button></li>
            </ul>

        </C.Container>

    );


}
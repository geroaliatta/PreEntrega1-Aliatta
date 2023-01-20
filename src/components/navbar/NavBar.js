/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget.js'
//Componentes
//Core

/*#############################################
                    Logica
#############################################*/

const NavBar = () => {


    return(

        <header>
            <div className='logoTitulo'>
                <h1><Link to="/">PC Gaming Store</Link></h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/home" className='itemLista'>Home</Link></li>
                    <li><Link to="/" className='itemLista'>Acción</Link></li>
                    <li><Link to="/" className='itemLista'>Aventura</Link></li>
                    <li><Link to="/" className='itemLista'>Rol</Link></li>
                    <li><Link to="/" className='itemLista'>Disparos</Link></li>
                    <li><Link to="/" className='itemLista'>Deportes y carreras</Link></li>
                    <li><Link to="/aboutus" className='itemLista'>Nosotros</Link></li>
                    <li><CartWidget cantidad = "7"></CartWidget></li>
                    
                </ul>
            </nav>
        </header>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default NavBar;
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
                    <li><Link to="/productos/Acción" className='itemLista'>Acción</Link></li>
                    <li><Link to="/productos/Aventura" className='itemLista'>Aventura</Link></li>
                    <li><Link to="/productos/Rol" className='itemLista'>Rol</Link></li>
                    <li><Link to="/productos/Disparos" className='itemLista'>Disparos</Link></li>
                    <li><Link to="/productos/Deportes y carreras" className='itemLista'>Deportes y carreras</Link></li>
                    <li><Link to="/aboutus" className='itemLista'>Nosotros</Link></li>
                    <li><Link to="/carrito"><CartWidget cantidad = "7"></CartWidget></Link></li>
                    
                </ul>
            </nav>
        </header>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default NavBar;
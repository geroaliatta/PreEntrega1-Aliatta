/*#############################################
                    Importaciones
#############################################*/

//Modulos
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
                <h1>PC Gaming Store</h1>
            </div>
            <nav>
                <ul>
                    <li><a href='#' className='itemLista'>Home</a></li>
                    <li><a href='#' className='itemLista'>Tienda</a></li>
                    <li><a href='#' className='itemLista'>Juegos Gratis</a></li>
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
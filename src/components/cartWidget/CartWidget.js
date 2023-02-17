/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useContext } from 'react';
//Estilos
import './CartWidget.css'
//Componentes
import { CartContext } from '../../context/CartContext';
//Core
//Icons
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

/*#############################################
                    Logica
#############################################*/

const CartWidget = (props) => {

    const {getTotalItems} = useContext(CartContext);

    return(
        <div>
            <p className='cartText'> 
            <FontAwesomeIcon className="iconoCarrito" icon={faCartShopping} /> {getTotalItems()}
            </p>
        </div>
        
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default CartWidget;
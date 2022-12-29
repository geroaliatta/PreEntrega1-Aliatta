/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './CartWidget.css'
//Componentes
//Core
//Icons
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

/*#############################################
                    Logica
#############################################*/

const CartWidget = (props) => {

    return(

        <p className='cartText'> 
            <FontAwesomeIcon className="iconoCarrito" icon={faCartShopping} /> {props.cantidad}
        </p>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default CartWidget;
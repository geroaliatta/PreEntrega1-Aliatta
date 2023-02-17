/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useContext } from 'react';
//Estilos
import './CartItem.css'

//Componentes
import { CartContext } from '../../../context/CartContext';
//Core

/*#############################################
                    Logica
#############################################*/
const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext);
    
    const {nombre, precio, imagen, quantity, totalPrice, id} = item

    return(
        
        <div >
            <div className='cartItem'>
                <h3 className='tituloCarrito'>{nombre}</h3>
                <img className='imgCarrito' src={imagen} alt={nombre} />
                <p className='textoItemCarrito'>precio unitario: ${precio}</p>
                <p className='textoItemCarrito'>cantidad: {quantity}</p>
                <p className='textoItemCarrito'>Precio total: ${totalPrice}</p>
                <button onClick={()=>removeItem(id)} className='botonEliminar'>Eliminar juego</button>
            </div>
        </div>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default CartItem

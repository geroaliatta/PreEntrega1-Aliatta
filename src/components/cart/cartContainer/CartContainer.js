/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useContext, useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { ThreeCircles} from  'react-loader-spinner';
//Estilos
import './CartContainer.css'
//Componentes
import CartItem from '../cartItem/CartItem';
import { CartContext } from '../../../context/CartContext';
//Core

/*#############################################
                    Logica
#############################################*/
const CartContainer = () => {
    const {cartItems, clearCartItems, totalPriceCart} = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        }, 1000);
    }, []);

    return (

        <div className='cartContainer'>
            <h2 className='titCarrito'>Carrito</h2>
            {loading ? (
                <ThreeCircles color="#580ABE" />
            ) : (
                <article>
                    <div className='divItemsCart2'>
                        {
                            cartItems.length > 0 ?
                                <>
                                    <div className='divItemsCart'>
                                        {
                                            cartItems.map(item => (
                                                <CartItem className='itemCart' key={item.id} item={item} />
                                            )

                                            )
                                        }
                                    </div>
                                    <button className='vaciarCarrito' onClick={clearCartItems}>Vaciar el carrito</button>
                                    <span className='totalCompra'>Total compra: $ {totalPriceCart()}</span>
                                    <Link className='linkCart' to="/finalizarcompra">Finalizar compra</Link>
                                </>
                                :
                                <p className='noJuegos'>No has agregado juegos...</p>

                        }
                    </div>
                    <div className='divLinks'>
                        <Link className='linkCart' to="/">Volver a lista de juegos</Link>
                    </div>
                </article>

            )}

        </div>

    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default CartContainer

/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { createContext, useState} from 'react';



/*#############################################
                    Contexto
#############################################*/

export const CartContext = createContext();


/*#############################################
                    Logica
#############################################*/
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const isInCart = (id) => {
        const itemInCart = cartItems.some((e) => e.id === id);
        return itemInCart;
    }

    const addItem = (item, qty) => {
        const newList = [...cartItems];


        if(isInCart(item.id)){
            const itemIndex = cartItems.findIndex(e=>e.id===item.id);
            newList[itemIndex].quantity = newList[itemIndex].quantity + qty;
            newList[itemIndex].totalPrice = newList[itemIndex].quantity * newList[itemIndex].precio;
            setCartItems(newList)
        } else{

            const newItem={...item, quantity:qty, totalPrice: qty*item.precio}

            const newList = [...cartItems];
            newList.push(newItem);
            setCartItems(newList);
        }
    }

    const removeItem = (idItem) => {
        const copyArray =[...cartItems];
        const newArray = copyArray.filter(e=>e.id !== idItem);
        setCartItems(newArray);
    }

    const clearCartItems = () => {
        setCartItems([])
    }

    const getTotalItems = () => {
        const totalItems = cartItems.reduce((acc,item)=>acc + item.quantity,0);
        return totalItems;
    }

    const totalPriceCart = () => {
        let total = 0
        cartItems.forEach((e) => (total +=e.quantity * e.precio))
        return total
    }

    return(
        
        <CartContext.Provider value={{cartItems, isInCart, addItem, removeItem, clearCartItems, getTotalItems, totalPriceCart}}>
            {children}
        </CartContext.Provider>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default CartProvider

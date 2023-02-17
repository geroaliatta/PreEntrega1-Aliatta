/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState } from 'react'

//Estilos
import './ItemCount.css'
//Componentes
//Core

/*#############################################
                    Logica
#############################################*/
const ItemCount = ({stock, initial, onAdd}) => {

    

    //Agregar un manejo de estado - useState

    const [count,setCount] = useState(initial);

    //Funciones de suma y de resta

    const addOne = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const disOne = () => {
        if (count > 1) {
            setCount(count - 1)
        
        }
    }


    return (

        <div className='divItemCount'>
            <div className='divCantidad'>
                <button disabled={stock === 0} onClick={disOne} className='botonResta'>-</button>
                <p className='count'>{count}</p>
                <button disabled={stock === 0} onClick={addOne} className='botonSuma'>+</button>
            </div>
            <button disabled={stock === 0} onClick={()=>onAdd(count)} className='botonComprar'>Comprar</button>
        </div>

    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemCount

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
const ItemCount = (props) => {

    //props.stock = "9"
    //No puede restar menos de 0, no puede sumar más de la cantidad máxima en stock
    

    //Agregar un manejo de estado - useState

    const [count,setCount] = useState(0)

    //Funciones de suma y de resta

    const addOne = () => {
        if (count < props.stock) {

        setCount(count + 1)
        }
    }

    const disOne = () => {

        if (count > 0) {

        setCount(count - 1)
        }
    }

    //Funcion agregar

    const onAdd = () => {
        console.log(count);
    }

    return(
        
        <div>
            <div>
                <button onClick={addOne}>+</button>
                <span>{count}</span>
                <button onClick={disOne}>-</button>
            </div>
            <button onClick={onAdd}>Agregar</button>
        </div>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemCount

/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState } from 'react';
//Estilos
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList';
//Core

/*#############################################
                    Logica
#############################################*/

const ItemListContainer = () => {
    
    const [categoria, setCategoria] = useState("Todos")

    const categoriaTodos = () => {
        setCategoria("Todos")
    }
    const categoriaAccion = () => {
        setCategoria("Acción")
    }
    const categoriaAventura = () => {
        setCategoria("Aventura")
    }
    const categoriaDeportesycarreras = () => {
        setCategoria("Deportes y carreras")
    }
    const categoriaDisparos = () => {
        setCategoria("Disparos")
    }
    const categoriaRol = () => {
        setCategoria("Rol")
    }

    


    return(

        <main className='mainItemList'>
            <p>Este es el ItemListContainer</p>
            <button onClick={categoriaTodos}>Todos</button>
            <button onClick={categoriaAccion}>Acción</button>
            <button onClick={categoriaAventura}>Aventura</button>
            <button onClick={categoriaRol}>Rol</button>
            <button onClick={categoriaDisparos}>Disparos</button>
            <button onClick={categoriaDeportesycarreras}>Deportes y carreras</button>
            <ItemList categoriaNombre={categoria}/>
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
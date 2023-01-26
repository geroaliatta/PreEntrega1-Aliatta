/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

//Estilos
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList';

//Core

/*#############################################
                    Logica
#############################################*/

const ItemListContainer = (props) => {


    const [productos,setProductos] = useState([])
    const {productosCategoria} = useParams();

    useEffect(()=>{
        fetch('../../data.json')
        .then(res=>res.json())
        .then(json=> {
            if (productosCategoria) {
                setProductos(
                    json.productos.filter((producto) => producto.categoria === productosCategoria)
                )
            } else {
                setProductos(json.productos)
            }
        })

    },[productosCategoria])
    
    return(

        <main className='mainItemList'>
            <h2 className='tituloListContainer'>Tienda</h2>
            <ItemList productos={productos}/>
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
/*#############################################
                    Importaciones
#############################################*/
//ESTOY EN RAMA PRUEBA
//Modulos
import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

//Estilos
import './ItemDetailContainer.css'

//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
// import ItemList from '../itemList/ItemList'

//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({})
    const {productoId} = useParams()

    useEffect(()=>{
        fetch('../../data.json')
        .then(res=>res.json())
        .then(data=>setProducto(data.productos.find((item) => item.id === parseInt(productoId))))
    }, [productoId])





    return(
        
        <section className='sectItemDetail'>
            <article className='artItemDetail'>
                <div>
                    <ItemDetail data={producto} />
                </div>
                <Link to="/" className='volver'>Volver</Link>
            </article>
            {/* <article>
                <h3 className='titMasJuegos'>Más Juegos...</h3>
                <ItemList/>
            </article> */}
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetailContainer
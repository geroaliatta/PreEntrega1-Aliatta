/*#############################################
                    Importaciones
#############################################*/

//Modulos

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'

//Core

/*#############################################
                    Logica
#############################################*/
const ItemList = (props) => {

    return(
        
        <section className='sectionTienda'>
            {props.productos.map((producto) => (
        <Item key={producto.id} data={producto} />
    ))}
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemList
/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './ItemDetail.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetail = (props) => {

    const {nombre,descripcion,categoria,precio,stock, imagen} = props.data

    return(
        
        <article>
            <div>
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p>{categoria}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <p>Stock disponible: {stock}</p>
            <ItemCount stock={stock}/>
        </div>
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetail
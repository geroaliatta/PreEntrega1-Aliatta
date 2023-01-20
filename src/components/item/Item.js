/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './Item.css'
import { Link } from 'react-router-dom';

//Componentes
import ItemCount from '../itemCount/ItemCount';

//Core

/*#############################################
                    Logica
#############################################*/
const Item = (props) => {

    const {nombre,descripcion,categoria,precio,stock, imagen, id} = props.data

    return(
        
        <div>
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p>{categoria}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <Link to={`/producto/${id}`}>Ver detalle producto</Link>
            <ItemCount stock={stock}/>
        </div>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default Item
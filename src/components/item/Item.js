/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './Item.css'

//Componentes
import ItemCount from '../itemCount/ItemCount';

//Core

/*#############################################
                    Logica
#############################################*/
const Item = (props) => {

    const {nombre,descripcion,categoria,precio,stock} = props.data

    return(
        
        <div>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>{descripcion}</p>
            <p>${precio}</p>
            <ItemCount stock={stock}/>
        </div>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default Item
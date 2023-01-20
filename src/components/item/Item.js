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
        
        <article className='artTienda'>
            <div className='divTienda'>
                <img src={imagen} alt={nombre} className='imgTienda'></img>
                <div className='divTiendaCont'>
                <h3 className='tituloTienda'>{nombre}</h3>
                <span className='categoriaTienda'>{categoria}</span>
                <p className='descripJuego'>{descripcion}</p>
                <span className='precioJuego'>${precio}</span>
                <Link to={`/producto/${id}`}>Ver detalle producto</Link>
                <ItemCount stock={stock}/>
                </div>
            </div>
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default Item
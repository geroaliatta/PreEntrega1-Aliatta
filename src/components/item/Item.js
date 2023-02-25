/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { Link } from 'react-router-dom';

//Estilos
import './Item.css'

//Componentes

//Core

/*#############################################
                    Logica
#############################################*/
const Item = (props) => {

    const {nombre,descripcion,categoria,precio, imagen, id} = props.data

    return(
        
        <article className='artTienda'>
            <div className='divTienda'>
                <img src={imagen} alt={nombre} className='imgTienda'></img>
                <div className='divTiendaCont'>
                <h3 className='tituloTienda'>{nombre}</h3>
                <span className='categoriaTienda'>{categoria}</span>
                <p className='descripJuego'>{descripcion}</p>
                <span className='precioJuego'>${precio}</span>
                <Link to={`/producto/${id}`}><button className='botonInfo'>+ Info</button></Link>
                </div>
            </div>
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default Item
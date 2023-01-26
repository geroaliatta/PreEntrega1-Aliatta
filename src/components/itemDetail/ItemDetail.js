/*#############################################
                    Importaciones
#############################################*/

//Modulos
import ReactPlayer from 'react-player/youtube'
//Estilos
import './ItemDetail.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetail = (props) => {

    const {nombre,descripcion,categoria,precio,stock, imagen, video} = props.data

    return(
        
        <article className='artDetail'>
            <div className='divDetail'>
                <h2 className='tituloDetail'>{nombre}</h2>
                <img src={imagen} alt={nombre} className='imgDetail'></img>
                <span className='categoriaTiendaDetail'>{categoria}</span>
                <p className='descripJuegoDetail'>{descripcion}</p>
                <span className='precioJuegoDetail'>${precio}</span>
                <p className='stockDetail'>Stock disponible: {stock}</p>
                <ItemCount stock={stock}/>
            </div>
            <ReactPlayer playing= 'true' controls='true' width='50%' height='535px' url={video} />
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetail
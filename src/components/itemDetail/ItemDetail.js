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
            <iframe width="50%" height="540" src="https://www.youtube.com/embed/HqQMh_tij0c?controls=0&amp;start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetail
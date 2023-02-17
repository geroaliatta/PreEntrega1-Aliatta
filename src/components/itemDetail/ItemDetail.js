/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState, useContext } from "react";
//Estilos
import './ItemDetail.css'
//Componentes
import ItemCount from '../itemCount/ItemCount'
import {CartContext} from "../../context/CartContext";
//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);
    const [cantidadProductosCompra, setCantidadProductosCompra] = useState(0);
    
    const onAdd = (count)=>{
        addItem(item,count);
        setCantidadProductosCompra(count);
    }


    const {nombre, descripcion, categoria, precio, stock, imagen} = item



    return(
        
        <article className='artDetail'>
            <div className='divDetail'>
                <h2 className='tituloDetail'>{nombre}</h2>
                <img src={imagen} alt={nombre} className='imgDetail'></img>
                <span className='categoriaTiendaDetail'>{categoria}</span>
                <p className='descripJuegoDetail'>{descripcion}</p>
                <span className='precioJuegoDetail'>${precio}</span>
                <p className='stockDetail'>Stock disponible: {stock}</p>
                <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            </div>
        </article>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetail
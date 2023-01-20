/*#############################################
                    Importaciones
#############################################*/

//Modulos

//Estilos
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList';

//Core

/*#############################################
                    Logica
#############################################*/

const ItemListContainer = (props) => {
    
    return(

        <main className='mainItemList'>
            <h2 className='tituloListContainer'>Tienda</h2>
            <ItemList/>
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
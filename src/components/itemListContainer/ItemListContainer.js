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
            <p>Este es el ItemListContainer</p>          
            <ItemList/>
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
//Core

/*#############################################
                    Logica
#############################################*/

const ItemListContainer = (props) => {

    return(

        <main className='mainItemList'>
            <p>Este es el componente contenedor ItemListContainer {props.greeting}</p>
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
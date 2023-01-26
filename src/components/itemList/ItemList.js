/*#############################################
                    Importaciones
#############################################*/

//Modulos

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'

//Core

/*#############################################
                    Logica
#############################################*/
const ItemList = (props) => {







//PROMESA PARA RETRASO DE INFO
/*    const respuesta = new Promise((resolve, reject) => {
        setTimeout(()=> {
            const productosCategoria =listaDeProductos.filter(e=> e.categoria === props.categoriaNombre)
            resolve(productosCategoria.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>))
        },2000)
    })

    
    respuesta.then((data)=> {setRenderizable(data)})
    */
//--------------------------------------------------------





    return(
        
        <section className='sectionTienda'>
            {props.productos.map((producto) => (
        <Item key={producto.id} data={producto} />
    ))}
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemList
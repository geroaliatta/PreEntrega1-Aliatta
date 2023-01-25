/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState , useEffect } from 'react'

//Estilos
import './ItemList.css'
//Componentes
import Item from '../item/Item'
//Core

/*#############################################
                    Logica
#############################################*/
const ItemList = (props) => {

    const [productos,setProductos] = useState([])

//API de productos

    useEffect(()=>{
        fetch('../../data.json')
        .then(res=>res.json())
        .then(json=> setProductos(json.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>)))

    },[])

    




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
            {productos}
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemList
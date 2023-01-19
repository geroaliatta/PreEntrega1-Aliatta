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




    //Llamada a array de objetos

    const listaDeProductos = [
        {
            id: 1,
            nombre:"Marvel’s Spider-Man Remastered",
            descripcion: "Marvel's Spider-Man Remasterizado nos trae a un Peter Parker más experimentado que lucha contra organizaciones criminales y villanos emblemáticos en la ciudad de Nueva York de Marvel. Nuestro protagonista se esfuerza por balancear su caótica vida personal y su carrera, mientras el destino de Nueva York descansa sobre sus hombros.",
            precio: 4999,
            categoria: "Acción",
            stock: 10 
        },{
            id: 2,
            nombre:"Cyberpunk 2077",
            descripcion: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
            precio: 2199,
            categoria: "Rol",
            stock: 11
        },{
            id: 3,
            nombre:"EA SPORTS™ FIFA 23",
            descripcion: "Vive toda la emoción del torneo más importante del futbol con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, disponible el 9 de noviembre sin costo adicional.",
            precio: 8999,
            categoria: "Deportes y carreras",
            stock: 5
        },{
            id: 4,
            nombre:"Horizon Zero Dawn™ Complete Edition",
            descripcion: "Vive la misión legendaria de Aloy para revelar los secretos de una futura Tierra dominada por máquinas. ¡Usa ataques devastadores contra tus presas y explora un majestuoso mundo abierto en este galardonado RPG de acción!",
            precio: 4199,
            categoria: "Aventura",
            stock: 3
        }
        ,{
            id: 5,
            nombre:"Grand Theft Auto V",
            descripcion: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.",
            precio: 899,
            categoria: "Acción",
            stock: 1
        },{
            id: 6,
            nombre:"Call of Duty®: Modern Warfare® II",
            descripcion: "Call of Duty®: Modern Warfare® II sumerge a los jugadores en un conflicto mundial sin precedentes que presenta el regreso de los icónicos Operadores de la Fuerza Operativa 141.",
            precio: 6990,
            categoria: "Disparos",
            stock: 12
        }
    ]

    //Retraso de informacion

    console.log(props.categoriaNombre);

    let productosRenderizables = []

    if (props.categoriaNombre === "Todos") {
        productosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>)
    } else {
        const productosCategoria = listaDeProductos.filter(e=> e.categoria === props.categoriaNombre)
    productosRenderizables = productosCategoria.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>)
    }

    


/*    const respuesta = new Promise((resolve, reject) => {
        setTimeout(()=> {
            const productosCategoria =listaDeProductos.filter(e=> e.categoria === props.categoriaNombre)
            resolve(productosCategoria.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>))
        },2000)
    })

    
    respuesta.then((data)=> {setRenderizable(data)})
    */






    return(
        
        <div>
            <p>Este es el ItemList</p>
            {productosRenderizables}
        </div>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemList
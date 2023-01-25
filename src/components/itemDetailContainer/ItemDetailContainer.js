/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

//Estilos
import './ItemDetailContainer.css'

//Componentes
import ItemDetail from '../itemDetail/ItemDetail'
import ItemList from '../itemList/ItemList'

//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetailContainer = () => {


    const [producto,setProducto] = useState()

    const {productoId} = useParams()

    const json1 = [
        {
            "id": 1,
            "nombre": "Marvel’s Spider-Man Remastered",
            "descripcion": "Luego de los eventos de Marvel's Spider-Man Remasterizado, el adolescente Miles Morales intenta adaptarse a la vida en su nuevo hogar intentando seguir los pasos de su mentor, Peter Parker, como el nuevo Spider-Man.",
            "imagen": "../media/juegos/spiderman-remastered.jpg",
            "precio": "4999,00",
            "categoria": "Acción",
            "stock": 12
        },
        {
            "id": 2,
            "nombre": "Marvel’s Spider-Man: Miles Morales",
            "descripcion": "Luego de los eventos de Marvel's Spider-Man Remasterizado, el adolescente Miles Morales intenta adaptarse a la vida en su nuevo hogar intentando seguir los pasos de su mentor, Peter Parker, como el nuevo Spider-Man.",
            "imagen": "../media/juegos/spiderman-miles.jpg",
            "precio": "4999,00",
            "categoria": "Acción",
            "stock": 34
        },
        {
            "id": 3,
            "nombre": "God of War",
            "descripcion": "Habiendo consumado su venganza contra los dioses el Olimpo años atrás, Kratos ahora vive como un hombre en el reino de los dioses y los monstruos nórdicos. En este hostil e inhóspito mundo, debe pelear por sobrevivir... y enseñarle a su hijo a hacer lo mismo.",
            "imagen": "../media/juegos/godofwar.jpg",
            "precio": "4199,00",
            "categoria": "Acción",
            "stock": 9
        },
        {
            "id": 4,
            "nombre": "Gotham Knights",
            "descripcion": "Batman está muerto. Ahora depende de la Batifamilia, Batichica, Ala Nocturna, Capucha Roja y Robin, proteger Ciudad Gótica.",
            "imagen": "../media/juegos/gothamknights.jpg",
            "precio": "5099,00",
            "categoria": "Acción",
            "stock": 36
        },
        {
            "id": 5,
            "nombre": "Horizon Zero Dawn™ Complete Edition",
            "descripcion": "Vive la misión legendaria de Aloy para revelar los secretos de una futura Tierra dominada por máquinas. ¡Usa ataques devastadores contra tus presas y explora un majestuoso mundo abierto en este galardonado RPG de acción!",
            "imagen": "../media/juegos/horizon.jpg",
            "precio": "4199,00",
            "categoria": "Aventura",
            "stock": 4
        },
        {
            "id": 6,
            "nombre": "Red Dead Redemption 2",
            "descripcion": "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX. También incluye acceso al mundo multijugador compartido de Red Dead Online.",
            "imagen": "../media/juegos/reddead.jpg",
            "precio": "2499,00",
            "categoria": "Aventura",
            "stock": 8
        },
        {
            "id": 7,
            "nombre": "Grounded",
            "descripcion": "El mundo es un lugar vasto, hermoso y peligroso, especialmente cuando te has reducido al tamaño de una hormiga. ¿Puedes prosperar junto a las hordas de insectos gigantes, luchando por sobrevivir a los peligros del patio trasero?",
            "imagen": "../media/juegos/grounded.jpg",
            "precio": "3199,00",
            "categoria": "Aventura",
            "stock": 2
        },
        {
            "id": 8,
            "nombre": "Cyberpunk 2077",
            "descripcion": "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
            "imagen": "../media/juegos/cyberpunk.jpg",
            "precio": "2199,00",
            "categoria": "Rol",
            "stock": 3
        },
        {
            "id": 9,
            "nombre": "Elden Ring",
            "descripcion": "EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.",
            "imagen": "../media/juegos/eldenring.jpg",
            "precio": "6499,00",
            "categoria": "Rol",
            "stock": 21
        },
        {
            "id": 10,
            "nombre": "New World",
            "descripcion": "Explora un electrizante videojuego MMO de mundo abierto. Forja tu destino en Aeternum, una isla sobrenatural donde hallarás toda clase de peligros y oportunidades.",
            "imagen": "../media/juegos/newworld.jpg",
            "precio": "2600,00",
            "categoria": "Rol",
            "stock": 5
        },
        {
            "id": 11,
            "nombre": "Call of Duty®: Modern Warfare® II",
            "descripcion": "Call of Duty®: Modern Warfare® II sumerge a los jugadores en un conflicto mundial sin precedentes que presenta el regreso de los icónicos Operadores de la Fuerza Operativa 141.",
            "imagen": "../media/juegos/callofduty.jpg",
            "precio": "6990,00",
            "categoria": "Disparos",
            "stock": 8
        },
        {
            "id": 12,
            "nombre": "Left 4 Dead 2",
            "descripcion": "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción terrorífica lleva a tus amigos y a ti a través de ciudades, pantanos y cementerios del Profundo Sur de EE. UU.",
            "imagen": "../media/juegos/l4d2.jpg",
            "precio": "765,00",
            "categoria": "Disparos",
            "stock": 16
        },
        {
            "id": 13,
            "nombre": "Battlefield™ V",
            "descripcion": "Esta es la experiencia definitiva de Battlefield V. Vive el mayor conflicto de la historia con el arsenal completo de armas, vehículos y dispositivos, además del mejor contenido de personalización de Year 1 y Year 2.",
            "imagen": "../media/juegos/battlefieldv.jpg",
            "precio": "5299,00",
            "categoria": "Disparos",
            "stock": 18
        },
        {
            "id": 14,
            "nombre": "EA SPORTS™ FIFA 23",
            "descripcion": "Vive toda la emoción del torneo más importante del futbol con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, disponible el 9 de noviembre sin costo adicional.",
            "imagen": "../media/juegos/fifa23.jpg",
            "precio": "8999,00",
            "categoria": "Deportes y carreras",
            "stock": 20
        },
        {
            "id": 15,
            "nombre": "NBA 2K23",
            "descripcion": "Ponte a la altura en NBA 2K23. Demuestra tu talento en MyCAREER. Junta a All-Stars con las leyendas atemporales en MyTEAM. Construye tu propia dinastía en MyGM o guía a la NBA en una nueva dirección con MyLEAGUE. Enfréntate a equipos de la NBA o la WNBA en JUGAR AHORA y disfruta de una experiencia de juego realista. ¿Cómo responderás a este llamado?",
            "imagen": "../media/juegos/nba2k23.jpg",
            "precio": "10999,00",
            "categoria": "Deportes y carreras",
            "stock": 25
        },
        {
            "id": 16,
            "nombre": "Forza Horizon 5",
            "descripcion": "Explora los vibrantes paisajes de mundo abierto de México con una acción de conducción ilimitada y divertida en los mejores autos del mundo. Acelera hacia Hot Wheels Park y experimenta las pistas más extremas jamás diseñadas. Requiere el juego Forza Horizon 5, la expansión se vende por separado.",
            "imagen": "../media/juegos/forza5.jpg",
            "precio": "5999,00",
            "categoria": "Deportes y carreras",
            "stock": 29
        },
        {
            "id": 17,
            "nombre": "F1® 22",
            "descripcion": "Entra en la nueva era de la Formula 1® en EA SPORTS™ F1® 22, el videojuego oficial del 2022 FIA Formula One World Championship™.",
            "imagen": "../media/juegos/f122.jpg",
            "precio": "6399,00",
            "categoria": "Deportes y carreras",
            "stock": 9
        },
        {
            "id": 18,
            "nombre": "Need for Speed™ Heat",
            "descripcion": "Apúrate de día y arriésgalo todo de noche en Need for Speed™ Heat Deluxe Edition, un juego de carreras callejeras dinámico, donde las líneas de la ley se desvanecen a medida que se pone sol.",
            "imagen": "../media/juegos/nfsheat.jpg",
            "precio": "4199,00",
            "categoria": "Deportes y carreras",
            "stock": 13
        }
    ]

    useEffect(()=>{
        setProducto(<ItemDetail key={json1.find(e => e.id == productoId).id} data={json1.find(e => e.id == productoId)}/>)
        return () =>{
            setProducto(<ItemDetail key={json1.find(e => e.id == productoId).id} data={json1.find(e => e.id == productoId)}/>)
        }
    },[])





    return(
        
        <section className='sectItemDetail'>
            <article className='artItemDetail'>
                <div>
                    {producto}
                </div>
                <Link to="/" className='volver'>Volver</Link>
            </article>
            <article>
                <h3 className='titMasJuegos'>Más Juegos...</h3>
                <ItemList/>
            </article>
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetailContainer
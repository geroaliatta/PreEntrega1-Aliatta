/*#############################################
                    Importaciones
#############################################*/

//Modulos
//Estilos
import './Home.css'
//Componentes
//Core

/*#############################################
                    Logica
#############################################*/
const Home = () => {

    return(
        
        <section className='sectionHome'>
            
            <video src='../../media/video/pcgaming1.mp4' loop autoPlay muted className='videoHome'></video>
            <div className='divHome'>
                <h1>SI BUSCABAS LOS MEJORES JUEGOS,<br></br>
                    PC GAMING STORE ES TU LUGAR!
                </h1>
                {/* <p>Página en proceso, próximamente...</p> */}
            </div>
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default Home
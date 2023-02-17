/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../services/firebase";
import { ThreeCircles} from  'react-loader-spinner';
//Estilos
import './ItemDetailContainer.css'

//Componentes
import ItemDetail from '../itemDetail/ItemDetail'

//Core

/*#############################################
                    Logica
#############################################*/
const ItemDetailContainer = () => {

    const {productoId} = useParams();
    const [item,setItem] = useState({});


    useEffect(()=>{
        const getProducto = async()=>{
            const queryRef = doc(db,"ListaProductos",productoId);
            const response = await getDoc(queryRef);
            const newDoc = {
                id:response.id,
                ...response.data()
            }
            setItem(newDoc);
        }
        getProducto();
    }, [productoId])


    const [loading, setLoading] = useState(false);

    useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        }, 1000);
    }, []);



    return(
        
        <section className='sectItemDetail'>
            {loading ? (
                <ThreeCircles color="#580ABE"/>
            ) : (
                <article className='artItemDetail'>
                    <div>
                        <ItemDetail item={item} />
                    </div>
                    <Link to="/" className='volver'>Volver</Link>
                </article>
            )}            
        </section>
        
    )

}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemDetailContainer





/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { ThreeCircles } from 'react-loader-spinner';

//Estilos
import './ItemListContainer.css'

//Componentes
import ItemList from '../itemList/ItemList';
import { db } from '../../services/firebase';

//Core

/*#############################################
                    Logica
#############################################*/

const ItemListContainer = () => {


    const [productos,setProductos] = useState([])
    const {productosCategoria} = useParams();

    useEffect(()=>{
        const getData = async()=>{

            const queryRef = productosCategoria ? query(collection(db,"ListaProductos") , where("categoria","==",productosCategoria)) : collection(db,"ListaProductos");

            const response = await getDocs(queryRef);
            const docsInfo = response.docs.map(doc=>{
                const newDoc = {
                    id:doc.id,
                    ...doc.data()
                }
                return newDoc
            });

            setProductos(docsInfo);

        }
        getData();

    },[productosCategoria])
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            }, 2000);
        }, []);
    

    return(

        <main className='mainItemList'>
            
            {loading ? (
                <ThreeCircles color="#580ABE"/>
            ) : (
                <article>
                    <h2 className='tituloListContainer'>Tienda</h2>
                    <ItemList productos={productos}/>
                </article>
            )}   
        </main>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default ItemListContainer;
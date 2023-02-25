/*#############################################
                    Importaciones
#############################################*/

//Modulos
import { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

//Estilos
import './Form.css'

//Componentes
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebase';

//Core

/*#############################################
                    Logica
#############################################*/
const Formulario = () => {

    const { cartItems, clearCartItems, totalPriceCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(undefined);

    const [orderInfo, setOrderInfo] = useState();

    const [compraFinalizada, cambiarCompraFinalizada] = useState(false);

    const sendOrder = async (order) => {
        const queryRef = collection(db, "orders");
        const response = await addDoc(queryRef, order);
        setOrderId(response.id);
        clearCartItems();
    }
    

    return (


        <section>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    mail: '',
                    mail2: ''
                }}

                validate={(valores) => {
                    let errores = {};

                    // Validacion nombre
                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingresa tu nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'El nombre solo puede contener letras y espacios'
                    }

                    // Validacion apellido
                    if (!valores.apellido) {
                        errores.apellido = 'Por favor ingresa tu apellido'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
                        errores.apellido = 'El apellido solo puede contener letras y espacios'
                    }

                    // Validacion telefono
                    if (!valores.telefono) {
                        errores.telefono = 'Por favor, ingresa un número de telefono'
                    } else if (!/^\d{8,14}$/.test(valores.telefono)) {
                        errores.telefono = 'El teléfono ingresado no es correcto.'
                    }

                    // Validacion mail
                    if (!valores.mail) {
                        errores.mail = 'Por favor ingresa tu E-mail'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.mail)) {
                        errores.mail = 'El E-mail solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                    }

                    // Validacion mail2
                    if (!valores.mail2) {
                        errores.mail2 = 'Por favor repetí tu E-mail'
                    } else if (valores.mail !== valores.mail2) {
                        errores.mail2 = 'El E-mail debe ser igual al anterior.'
                    }

                    return errores;
                }}

                onSubmit={(valores, { resetForm }) => {

                    const newOrder = {
                        cliente: {
                            nombre: valores.nombre,
                            apellido: valores.apellido,
                            telefono: valores.telefono,
                            mail: valores.mail,
                        },
                        items: cartItems,
                        total: totalPriceCart(),
                    }

                    setOrderInfo(newOrder);
                    resetForm();
                    sendOrder(newOrder);
                    cambiarCompraFinalizada(true);
                }}

            >
                {({ errors }) => (
                    <Form>
                        <section>
                            <h2 className='tituloForm'>Ya casi es tuyo...</h2>
                            {!compraFinalizada ? (
                                <article className='articleForm'>
                                    
                                    <div className='divResumenCompra'>
                                        <div>
                                            <h3 className='tituloForm2'>Completá tus datos</h3>
                                            <div>
                                                <label htmlFor='nombre'>Nombre:</label>
                                                <Field type='text' id='nombre' name='nombre' placeholder='Escribí tu nombre...' />
                                                <ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
                                            </div>

                                            <div>
                                                <label htmlFor='apellido'>Apellido:</label>
                                                <Field type='text' id='apellido' name='apellido' placeholder='Escribí tu apellido...' />
                                                <ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
                                            </div>

                                            <div>
                                                <label htmlFor='telefono'>Teléfono:</label>
                                                <Field type='number' id='telefono' name='telefono' placeholder='Escribí tu teléfono...' />
                                                <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
                                            </div>

                                            <div>
                                                <label htmlFor='mail'>E-mail:</label>
                                                <Field type='email' id='mail' name='mail' placeholder='Escribí tu E-mail...' />
                                                <ErrorMessage name="mail" component={() => (<div className="error">{errors.mail}</div>)} />
                                            </div>

                                            <div>
                                                <label htmlFor='mail2'>Confirmación de E-mail:</label>
                                                <Field type='email' id='mail2' name='mail2' placeholder='Repetí tu E-mail...' />
                                                <ErrorMessage name="mail2" component={() => (<div className="error">{errors.mail2}</div>)} />
                                            </div>
                                        </div>
                                        <div className='divTabla'>
                                            <h3 className='tituloForm2'>Resumen de compra</h3>
                                            <table className='tablaCompra'>
                                                <thead>
                                                    <tr>
                                                        <th>Juego</th>
                                                        <th>Cantidad</th>
                                                        <th>Precio</th>
                                                    </tr>
                                                </thead>

                                                {
                                                    cartItems.map(item => (
                                                        <tbody>
                                                            <td className='tituloJuego'>{item.nombre}</td>
                                                            <td className='numForm'>{item.quantity}</td>
                                                            <td className='numForm'>$ {item.totalPrice}</td>
                                                        </tbody>
                                                    ))
                                                }

                                                <tfoot>
                                                    <tr>
                                                        <th>TOTAL</th>
                                                        <th></th>
                                                        <th className='totalForm'>$ {totalPriceCart()}</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                    <button type='submit' className='botonComprarForm'>¡Comprar ahora!</button>
                                </article>
                                
                            ) : (
                                <div>
                                    <h2 className='tituloForm'>LOS JUEGOS SON TUYOS, A VICIAR!</h2>
                                    <div>
                                        <p>¡Muchas gracias por tu compra {orderInfo.cliente.nombre} {orderInfo.cliente.apellido}! El ID de tu compra es el {orderId}. En breve recibirás a tu mail {orderInfo.cliente.mail} las intrucciones para realizar el pago por un total de $ {orderInfo.total}, el mismo puede demorar hasta 48 horas hábiles en impactar. Una vez impactado, te daremos acceso a los juegos adquiridos. Ante cualquier inconveniente nos contactaremos telefónicamente al número informado {orderInfo.cliente.telefono}. ¡Saludos! </p>
                                    </div>
                                    <Link to="/">¡Seguir comprando!</Link>
                                </div>
                            )}
                        </section>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

/*#############################################
                    Exportaciones
#############################################*/

export default Formulario

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
import FormButton from './FormButton';
import contactImg from '../img/imgContact/contactImg.png';

function Contact() {
    
    const [state, handleSubmit] = useForm('xlekpege');
    if (state.succeeded) {
        return <p>¡Muchas gracias por su mensaje! Nos pondremos en contacto con lo antes posible.</p>;
    }

    return (
        <>
            <div className='pageTitle'>
                <h2 className='textCharacteristics'>Contacta</h2>
                <div className='purpleRec'></div>
            </div>
            <div className='contentBox'>  
                <p className='bodyText'>¿Tienes alguna duda, propuesta o sugerencia? Buscamos la respuesta indicada a tu mensaje, para ello contacta con nosotros o escríbenos mediante el formulario.</p>
                <div className='contactFormBox'>
                    <form onSubmit={handleSubmit}>
                        <div className='contactFormTopInfo'>
                            <div>
                                <label htmlFor='name' className='contactFormTxt'>Nombre: </label>
                                <input 
                                    id='name' 
                                    type='text'
                                    name='name'
                                />
                                <ValidationError 
                                    prefix='Name' 
                                    field='name'
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor='surname' className='contactFormTxt'>Apellidos: </label>
                                <input 
                                    id='surname' 
                                    type='text'
                                    name='surname'
                                />
                                <ValidationError 
                                    prefix='Surname' 
                                    field='surname'
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor='email' className='contactFormTxt'>Correo electrónico: </label>
                            <input 
                                    id='email' 
                                    type='email'
                                    name='email'
                                />
                                <ValidationError 
                                    prefix='Email' 
                                    field='email'
                                    errors={state.errors}
                                />
                        </div>

                        <div>
                            <label htmlFor='message' className='contactFormTxt'>Sugerencia o mensaje: </label>
                            <textarea
                                id='message'
                                name='message'
                            />
                            <ValidationError 
                                prefix='Message' 
                                field='message'
                                errors={state.errors}
                            />
                        </div>
                    </form>
                    <FormButton type='submit' disabled={state.submitting} />
                </div>
            </div>
            <div className='contactBanner'>
                <img src={contactImg} alt='Banner inferior de mujer con teléfono móvil' />
            </div>
        </>
    )
}

export default Contact
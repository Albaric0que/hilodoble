import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
import FormButton from "./FormButton";
import contactImg from '../img/imgContact/contactImg.png';

function Contact() {
    
    const [state, handleSubmit] = useForm("xlekpege");
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
                    <form action='https://formspree.io/f/xlekpege' method='POST'>
                        <div className='contactFormTopInfo'>
                            <div>
                                <label className='contactFormTxt'>Nombre: </label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
                            </div>
                            <div>
                                <label className='contactFormTxt'>Apellidos: </label>
                                <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} required/>
                            </div>
                        </div>

                        <div>
                            <label className='contactFormTxt'>Correo electrónico: </label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                        </div>

                        <div>
                            <label className='contactFormTxt'>Sugerencia o mensaje: </label>
                            <textarea name="suggestionOrMessage" value={formData.suggestionOrMessage} onChange={handleInputChange} required/>
                        </div>
                    </form>
                    <FormButton />
                </div>
            </div>
            <div className="contactBanner">
                <img src={contactImg} alt="Banner inferior de mujer con teléfono móvil" />
            </div>
        </>
    )
}

export default Contact
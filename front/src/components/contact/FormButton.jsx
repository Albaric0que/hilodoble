import React from 'react'
import './FormButton.css'

function FormButton() {
    return (
    <div className='contactBtnBox'>
        <button className='contactBtn' type="submit">Enviar</button>
    </div>
    );
}

export default FormButton



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
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Nombre:</label>
                <input id="name" type="text" name="name"/>
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />

                <label htmlFor="last_name">Apellidos:</label>
                <input id="last_name" type="text" name="last_name" />
                <ValidationError 
                    prefix="Last Name" 
                    field="last_name"
                    errors={state.errors}
                />

                <label htmlFor="email">Correo electrónico:</label>
                <input id="email" type="email" name="email" />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />

                <label htmlFor="message">Sugerencia o mensaje:</label>
                <textarea id="message" name="message"></textarea>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />

                <FormButton type="submit" disabled={state.submitting} />
            </form>
                <div className="contactBanner">
                    <img src={contactImg} alt="Banner inferior de mujer con teléfono móvil" />
                </div>
        </>
    );
    }



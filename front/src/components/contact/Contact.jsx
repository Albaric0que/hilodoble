import React from 'react'
import './Contact.css'
import Button from '../collabs/Button'

function Contact() {
    return (
        <>
            <div className='pageTitle'>
                <h2 className='textCharacteristics'>Contacta</h2>
                <div className='purpleRec'></div>
            </div>
            <div className='contentBox'>
                <p className='bodyText'>¿Tienes alguna duda, propuesta o sugerencia? Buscamos la respuesta indicada a tu mensaje, para ello contacta con nosotros o escríbenos mediante el formulario.</p>
                <form action="" method='post'>
                    <label className='contactForm'>Nombre</label>
                    <input type="text" className='formControlTextarea' name="name" value=""/>



                </form>
                <div className='buttons'>
                    <Button text='Enviar' className='FormBtn'/>
                </div>
            </div>
        </>
    )
}

export default Contact
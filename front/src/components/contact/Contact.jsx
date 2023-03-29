import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm, ValidationError } from '@formspree/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormGroup, Button, Alert, Row, Col } from 'reactstrap';
import './Contact.css'
import FormButton from "./FormButton";
import contactImg from '../img/imgContact/contactImg.png';

function Contact() {
    
    const schema = Yup.object().shape({
        name: Yup.string().required("Por favor, introduce tu nombre"),
        lastName: Yup.string().required("Por favor, introduce tus apellidos"),
        email: Yup.string().email("Introduce una dirección de correo electrónico válida").required("Por favor, introduce tu correo electrónico"),
        message: Yup.string().required("Por favor, introduce un mensaje"),
    });
    
    <Formik
        initialValues={{
            Name:'',
            LastName:'',
            Email:'',
            Message:'',
        }}
        validationSchema={schema}
        ></Formik>

/*     const [state, handleSubmit] = useForm("xlekpege");
    const [validationErrors, setValidationErrors] = useState({});
    
    const onSubmit = async (values) => {
        try {
            await schema.validate(values, { abortEarly: false });
            setValidationErrors({});
            handleSubmit(values);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = {};
                err.inner.forEach((e) => {
                    errors[e.path] = e.message;
                });
                setValidationErrors(errors);
            }
        }
    }; */
    
    /* if (state.succeeded) {
        return <p>¡Muchas gracias por su mensaje! Nos pondremos en contacto con lo antes posible.</p>;
    } */
    return (
        <>
            <form>
                <FormGroup>
                    <label htmlFor="name">Nombre:</label>
                    <Field
                        className="contactFormTxt"
                        name="Name"
                        placeholder="Pepe"
                        type="text"
                    />
                    <ErrorMessage 
                        name="Name"
                        component="div"
                        className="field-error text-danger"
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="lastName">Apellidos:</label>
                    <Field
                        className="contactFormTxt"
                        name="LastName"
                        placeholder="Gómez"
                        type="text"
                    />
                    <ErrorMessage 
                        name="LastName"
                        component="div"
                        className="field-error text-danger"
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="lastName">Correo Electrónico:</label>
                    <Field
                        className="contactFormTxt"
                        name="Email"
                        placeholder="nombre@hilodoble.com"
                        type="email"
                    />
                    <ErrorMessage 
                        name="Email"
                        component="div"
                        className="field-error text-danger"
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="lastName">Sugerencia o mensaje:</label>
                    <Field
                        className="contactFormTxt"
                        name="Message"
                        placeholder="Buenas tardes. Mi nombre es Femcoder y me encantaría..."
                        type="textarea"
                    />
                    <ErrorMessage 
                        name="Message"
                        component="div"
                        className="field-error text-danger"
                    />
                </FormGroup>
                <Row>
                    <Col lg={12} md={12}>
                        <FormButton type="submit" />
                    </Col>
                </Row>
        </form>

        <div className="contactBanner">
            <img src={contactImg} alt="Banner inferior de mujer con teléfono móvil" />
        </div>
        </>
    );
}


    /* const [state, handleSubmit] = useForm("xlekpege");
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
} */

export default Contact
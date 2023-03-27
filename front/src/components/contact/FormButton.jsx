import React from 'react'

function FormButton(props) {
    return (
    <>
    <button className={`basic-btn ${props.clase}`}>{props.text}</button>
    </>
    );
}

export default FormButton
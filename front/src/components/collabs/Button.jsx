import React from 'react'
import './Button.css'

function Button(props) {
    return (
    <>
    <button className={`basicBtn ${props.clase}`}>{props.text}</button>
    </>
    );
}

export default Button
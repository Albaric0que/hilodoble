import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <>
        <nav>
            <ul id='navbar'>
                <li><a className='active' href="index.html">INICIO</a></li>
                <li><a href="index.html">TIENDA</a></li>
                <li><a href="index.html">SOBRE NOSOTROS</a></li>
                <li><a href="index.html">TIENDAS AMIGAS</a></li>
                <li><a href="index.html">CONTACTA</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
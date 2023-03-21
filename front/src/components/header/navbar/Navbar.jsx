import React, { Component } from 'react'
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a className='active' href="index.html">INICIO</a></li>
                        <li><a href="index.html">TIENDA</a></li>
                        <li><a href="index.html">SOBRE NOSOTROS</a></li>
                        <li><a href="index.html">TIENDAS AMIGAS</a></li>
                        <li><a href="index.html">CONTACTA</a></li>
                        <li><a href="index.html">CARRITO</a></li>
                        <li><a href="index.html">MI PERFIL</a></li>
                    </ul>
                </nav>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </>
        )
}
}

export default Navbar
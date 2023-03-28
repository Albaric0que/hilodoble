import React, { Component } from 'react'
import "./Navbar.css"
import Searchbar from '../searchbar/Searchbar';
import cart from '../../img/imgHeader/cart.svg';
import profile from '../../img/imgHeader/profile.svg';


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
                        <div className='iconsSearchbar'>
                            <li>
                            <a href={`/allItems`}><img className='cart' src={cart} alt="logo" /></a>
                            <a href={`/profile`}><img className='profile' src={profile} alt="Profile Section" /></a>
                            </li>
                            <li>
                                <Searchbar/>
                            </li>
                        </div>
                        <li><a href={`/home`}>INICIO</a></li>
                        <li><a href={`/allItems`}>TIENDA</a></li>
                        <li><a href={`/aboutUs`}>SOBRE NOSOTROS</a></li>
                        <li><a href={`/friendsShops`}>TIENDAS AMIGAS</a></li>
                        <li><a href={`/contact`}>CONTACTA</a></li>
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
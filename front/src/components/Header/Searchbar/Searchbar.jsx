import React from 'react'
import searchIcon from '../../img/searchIcon.png';
import './Searchbar.css';

function Searchbar() {
    return (
        <div>
            <input className="searchBox" type="search"/>
            <img className='searchIcon' src={searchIcon} alt="logo" />
        </div>
    )
}

export default Searchbar
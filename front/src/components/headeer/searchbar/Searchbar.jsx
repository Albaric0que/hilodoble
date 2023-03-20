import React from 'react'
import searchIcon from '../../img/searchIcon.png';
import './Searchbar.css';

function Searchbar() {
    return (
        <div className='searchAll'>
            <img className='searchIcon' src={searchIcon} alt='logo' />
            <input className='searchBox' type='search'/>
        </div>
    )
}

export default Searchbar
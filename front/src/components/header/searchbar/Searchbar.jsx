import React from 'react'
import './Searchbar.css';

function Searchbar() {
    return (
        <div className='searchAll'>
            <input className='searchBox' type='search' placeholder="Buscar..."/>
            <svg 
                xmlns='/front/src/components/img/searchIcon.png'
                className='searchIcon'
                viewBox='0 0 20 20'
            >
                <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
                />
            </svg>
        </div>
    )
}

export default Searchbar
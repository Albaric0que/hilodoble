import React from 'react'
import './Head.css';
import fbIcon from '../../img/imgHeader/fb.svg'
import twIcon from '../../img/imgHeader/tw.svg'
import igIcon from '../../img/imgHeader/ig.svg'

function Head() {
    return (
        <div className='purpleBox'>
            <div className='smIcons'>
                <a href="https://www.facebook.com/hilodoble/?locale=es_LA" target="_blank" rel="noreferrer"><img className='fbIcon' src={fbIcon} alt="Hilodoble's Facebook Profile" /></a>
                <a href="https://twitter.com/Hilodoble_" target="_blank" rel="noreferrer"><img className='twIcon' src={twIcon} alt="Hilodoble's Twitter Profile" /></a>
                <a href="https://www.instagram.com/hilodobleshop/?hl=es" target="_blank" rel="noreferrer"><img className='igIcon' src={igIcon} alt="Hilodoble's Instagram Profile" /></a>
            </div>
        </div>
    )
}

export default Head
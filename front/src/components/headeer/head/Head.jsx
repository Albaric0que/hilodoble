import React from 'react'
import './Head.css';
import fbIcon from '../../img/fbIcon.png'
import twIcon from '../../img/twIcon.png'
import igIcon from '../../img/igIcon.png'

function Head() {
    return (
        <div className='purpleBox'>
            <div className='smIcons'>
                <img className='fbIcon' src={fbIcon} alt="Hilodoble's Facebook Profile" />
                <img className='twIcon' src={twIcon} alt="Hilodoble's Twitter Profile" />
                <img className='igIcon' src={igIcon} alt="Hilodoble's Instagram Profile" />
            </div>
            
        </div>
    )
}

export default Head
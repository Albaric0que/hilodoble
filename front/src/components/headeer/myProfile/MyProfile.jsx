import React from 'react'
import profile from '../../img/profile.svg';
import './MyProfile.css';

function MyProfile() {
    return (
        <>
            <a href={`/login`}><img className='profile' src={profile} alt="Profile Section" /></a>
        </>
    )
}

export default MyProfile
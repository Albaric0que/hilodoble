import React from 'react'
import profile from '../img/profile.png';
import './MyProfile.css';

function MyProfile() {
    return (
        <>
            <img className='profile' src={profile} alt="Profile Section" />
        </>
    )
}

export default MyProfile
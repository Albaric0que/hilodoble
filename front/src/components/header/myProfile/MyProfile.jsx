import React from 'react'
import profile from '../../img/imgHeader/profile.svg';
import './MyProfile.css';

function MyProfile() {
    return (
        <>
            <a href={`/profile`}><img className='profile' src={profile} alt="Profile Section" /></a>
            <a href={`/login`}>Login</a>
        </>
    )
}

export default MyProfile
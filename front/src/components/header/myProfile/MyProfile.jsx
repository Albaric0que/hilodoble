import React, { useState, useEffect } from 'react';
import profile from '../../img/imgHeader/profile.svg';
import './MyProfile.css';

function MyProfile() {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        function handleStorageChange() {
            const userData = localStorage.getItem('user');
            const parsedUserData = userData ? JSON.parse(userData) : null;
            setUserName(parsedUserData?.user?.name || null);
        }

        // Initialize user name
        handleStorageChange();

        // Listen for local storage changes
        window.addEventListener('storage', handleStorageChange);

        // Clean up event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <>
            <a href={`/dashboard`}>
                <img className='profile' src={profile} alt="Profile Section" />
                {userName ? (
                    <>
                        <span className="username">{userName}</span>
                        <a className="nav-link" href="/logout">logout</a>
                    </>
                ) : (
                    <a className="nav-link" href="/login">login</a>
                )}
            </a>
        </>
    );
}

export default MyProfile;

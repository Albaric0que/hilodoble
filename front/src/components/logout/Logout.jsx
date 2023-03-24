import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../../services/auth-service';

function Logout() {
    const history = useHistory();

    const handleLogout = () => {
        AuthService.logout();
        history.push('/login');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;

import React from 'react';
import { useAuth } from "../../hooks/auth";

export default function Logout() {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <div>
        {user && (
            <button onClick={handleLogout}>Logout</button>
        )}
        </div>
    )
}


import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth-service";


function Profile() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        setUserName(currentUser.username);
    }, []);

    return (
        <div>
            <h1>Bienvenido {AuthService.getCurrentUser().username} a tu perfil</h1>
            <p>Email: {AuthService.getCurrentUser().email}</p>
        </div>
    );
}

export default Profile;

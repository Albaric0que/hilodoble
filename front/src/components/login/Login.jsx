import React from "react";
import axios from "axios";
import { setAuthToken } from "../../helpers/setAuthToken"

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
    
        axios
            .post("http://127.0.0.1:8000/api/auth/login", {
            email,
            password
            })
            .then(response => {
            const token = response.data.accessToken;
            localStorage.setItem("user", JSON.stringify(response.data));
            setAuthToken(token);
            window.location.href = '/profile'
            })
            .catch((error) => {
                console.error(error);
                alert("No está registrado");
            });
        };

        

    return (
        <form onSubmit={handleSubmit}>
        <label for="email">Email</label><br />
        <input type="email" id="email" name="email"/><br />
        <label for="password">Password</label><br />
        <input type="password" id="password" name="password"/><br></br>
        <input type="submit" value="Submit" />
        </form>
    );
}
export default Login
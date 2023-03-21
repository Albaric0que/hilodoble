import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', {
                email: email,
                password: password,
                remember: remember,
            });
            localStorage.setItem('token', response.data.access_token);
            history.push('/');
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <div className="card">
                <div className="card-header">Login</div>

                <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="row mb-3">
                    <label htmlFor="email" className="col-md-4 col-form-label text-md-end">
                        Email Address
                    </label>

                    <div className="col-md-6">
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        autoFocus
                        />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <label htmlFor="password" className="col-md-4 col-form-label text-md-end">
                        Password
                    </label>

                    <div className="col-md-6">
                        <input
                        id="password"
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        />
                    </div>
                    </div>

                    <div className="row mb-3">
                    <div className="col-md-6 offset-md-4">
                        <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />

                        <label className="form-check-label" htmlFor="remember">
                            Remember Me
                        </label>
                        </div>
                    </div>
                    </div>

                    <div className="row mb-0">
                    <div className="col-md-8 offset-md-4">
                        <button type="submit" className="btn btn-primary">
                        Login
                        </button>

                        <Link to="/password/reset" className="btn btn-link">
                        Forgot Your Password?
                        </Link>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Login;

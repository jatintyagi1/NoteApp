import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve user data from local storage
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData) {
            if (userData.email === email && userData.password === password) {
                // Successful login, redirect to home or dashboard
                navigate('/'); // Redirect to home page
            } else {
                setError("Invalid email or password.");
            }
        } else {
            setError("No user found. Please sign up.");
        }
    };

    return (
        <div className="container">
            <h1 className="mt-5">Login</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;

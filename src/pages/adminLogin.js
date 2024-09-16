import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/login', { username, password });
            localStorage.setItem('token', res.data.token);
            window.location.href = '/admin/panel';
        } catch (err) {
            console.error("Login fallido", err);
        }
    };

    return (
        <div className="container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Usuario</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;

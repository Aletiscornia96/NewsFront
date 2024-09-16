import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/admin/login', { username, password });
            setToken(res.data.token);  // Guardar token en estado o localStorage
            alert('Login exitoso');
        } catch (err) {
            alert('Login fallido');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
